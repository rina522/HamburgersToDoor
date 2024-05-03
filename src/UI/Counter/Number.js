import React, {Fragment, useContext} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'
import styles from './Number.module.css'
import CartContext from '../../store/CartContext'

export default function Number(props) {

    const cartData = useContext(CartContext)

    const add=()=>{
        cartData.addSum(props.item)
        
      }
      
      const sub=()=>{
        cartData.subSum(props.item)
    
      }

  return (
    <div className={styles.buttons}>
        {props.item.number > 0 &&(
        <Fragment>
        <button onClick={sub} className={styles.minus}>
            <FontAwesomeIcon icon={faMinus} />
        </button>

        <span className={styles.number}>{props.item.number}</span>
        </Fragment>)}
        
        <button onClick={add} className={styles.add}>
            <FontAwesomeIcon icon={faPlus}/>
        </button>  
    </div>   
      
    
  )
}
