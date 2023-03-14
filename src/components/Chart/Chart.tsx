export type Props = {
  orangeClick: number,
  blueClick: number
}
const Chart = ({orangeClick, blueClick}: Props) => {
  return (
    <>
      <span>{orangeClick}</span>
      <span>{blueClick}</span>
    </>
  )
}

export default Chart