COMPOSE ?= docker compose

# Read a key out of .env so the Makefile can print the right URLs.
# Precedence: `make start PORT=9000` > shell env > .env > the default below.
dotenv = $(shell [ -f .env ] && sed -n 's/^[[:space:]]*$(1)[[:space:]]*=[[:space:]]*//p' .env | tail -1)

PORT     ?= $(or $(call dotenv,PORT),8080)
DEV_PORT ?= $(or $(call dotenv,DEV_PORT),5173)

# Only export when set on the command line. Otherwise leave the environment
# clean so Docker Compose resolves .env itself.
ifeq ($(origin PORT),command line)
export PORT
endif
ifeq ($(origin DEV_PORT),command line)
export DEV_PORT
endif

.DEFAULT_GOAL := help

.PHONY: help
help: ## Show this help
	@grep -hE '^[a-zA-Z_-]+:.*?## ' $(MAKEFILE_LIST) \
		| awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-10s\033[0m %s\n", $$1, $$2}'

.PHONY: env
env: ## Create .env from .env.dist if it does not exist
	@if [ -f .env ]; then echo ".env already exists, leaving it alone"; \
	else cp .env.dist .env && echo "created .env from .env.dist"; fi

## ---- docker ----

.PHONY: prod
prod: env ## Build and run the production image (nginx, detached)
	$(COMPOSE) up -d --build app
	@echo "production → http://localhost:$(PORT)"

.PHONY: start
start: prod ## Alias for 'make prod'

.PHONY: stop
stop: ## Stop and remove the containers
	$(COMPOSE) --profile dev down

.PHONY: restart
restart: stop prod ## Restart the production app

.PHONY: dev
dev: env ## Run the Vite dev server with hot reload (foreground)
	@echo "dev → http://localhost:$(DEV_PORT)"
	$(COMPOSE) --profile dev up --build dev

.PHONY: logs
logs: ## Tail the production container logs
	$(COMPOSE) logs -f app

.PHONY: ps
ps: ## Show container status
	$(COMPOSE) ps

.PHONY: clean
clean: ## Tear down and remove local images, volumes and dist
	$(COMPOSE) --profile dev down --rmi local --volumes --remove-orphans
	rm -rf dist

## ---- local (no docker) ----

.PHONY: install
install: ## Install npm dependencies
	npm ci
	@touch node_modules/.installed

# Reinstall only when the lockfile is newer than the last install, so a fresh
# clone (or a pulled dependency change) just works with `make build` etc.
node_modules/.installed: package-lock.json
	npm ci
	@touch $@

.PHONY: serve
serve: node_modules/.installed ## Run the Vite dev server on the host
	npm run dev

.PHONY: build
build: node_modules/.installed ## Production build to ./dist
	npm run build

.PHONY: preview
preview: build ## Build and preview the production bundle on the host
	npm run preview

.PHONY: lint
lint: node_modules/.installed ## Lint the source
	npm run lint
