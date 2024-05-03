import React from 'react'
import styles from './Counter.module.css'
import Number from './Number'


export default function Counter(props) {


  return (
    <div className={styles.counter}>

      <div className={styles.price}>
        <span>¥</span>
        <span>{props.item.price}</span>
      </div>  
      <Number item={props.item}/>
          
    </div>  
  )
}
