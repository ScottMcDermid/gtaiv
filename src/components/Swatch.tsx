interface Props {
  colors: string[] | null
  title: string
}

export function Swatch({ colors, title }: Props) {
  if (!colors || colors.length === 0) {
    return <span className="sw sw--unknown" title={`${title} (colour unconfirmed)`} />
  }

  const background =
    colors.length === 1
      ? colors[0]
      : `linear-gradient(135deg, ${colors[0]} 50%, ${colors[1]} 50%)`

  return <span className="sw" style={{ background }} title={title} />
}
