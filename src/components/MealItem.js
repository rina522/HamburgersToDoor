import React from 'react'
import styles from './MealItem.module.css'
import Counter from '../UI/Counter/Counter'

export default function MealItem(props) {


  return (
    <div className={styles.mealItem}>
      <img className={styles.img} src={props.item.img}></img>

      <div className={styles.brief}>
        <h3 className={styles.title}>{props.item.title}</h3>
        <p className={styles.description}>{props.item.desc}</p>

        <Counter item={props.item} />

      </div>
    </div>
  
  )
}
