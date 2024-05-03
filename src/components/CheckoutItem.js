import React from 'react'
import styles from './CheckoutItem.module.css'
import Number from '../UI/Counter/Number'


export default function CheckoutItem(props) {
  return (
    <div className={styles.item} >
      <img className={styles.img} src={props.item.img} />

      <div className={styles.brief}>
        <h3 className={styles.title}>{props.item.title}</h3>

        <div className={styles.sumbox}>
          <Number item={props.item} />

          <div className={styles.sumPrice}>
            <span>¥</span>
            <span>{(props.item.price)*(props.item.number)}</span>
          </div>
        </div>
        

      </div>
      
    </div>
  )
}
