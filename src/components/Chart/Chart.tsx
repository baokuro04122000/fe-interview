import styles from './Chart.module.css'
export type Props = {
  orangeClick: number,
  blueClick: number
}
const Chart = ({orangeClick, blueClick}: Props) => {
  return (
    <>
      <ul className={styles['chart']}>
        <li className={styles['custom-li']}>
          <span className={styles['custom-span']}
           style={{
            height: blueClick + '%'
          }}>
            Blue
          </span>
        </li>
        <li className={styles['custom-li']}>
          <span className={styles['custom-span']} style={{
            height: orangeClick + '%'
          }} >Orange</span>
        </li>
        
      </ul>    
    </>
  )
}

export default Chart