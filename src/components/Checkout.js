import React, {useContext} from 'react'
import styles from'./Checkout.module.css'
import CartContext from '../store/CartContext'
import CheckoutItem from './CheckoutItem'
import Backdrop from '../UI/Backdrop/Backdrop'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faCartShopping } from '@fortawesome/free-solid-svg-icons'


export default function Checkout(props) {

    const cartdata = useContext(CartContext)

    const cancleCheckout = ()=>{
        props.closeCheckout()
    }


  return (
    <Backdrop className={styles.cartBoard}>
        <div onClick={cancleCheckout} className={styles.close}>
            <FontAwesomeIcon icon={faClose}/>
        </div>

        <div className={styles.board}>
            <div className={styles.cart}>
                <FontAwesomeIcon icon={faCartShopping}/>
                <span className={styles.text}>Cart</span>
            </div>
            <div className={styles.line}></div>
            <div className={styles.Items}>
                {cartdata.cartItems.map(item => <CheckoutItem key={item.id} item={item}/>)}
            </div>
        </div>

        
        <div className={styles.greyBar}>
            <div className={styles.sumPrice}>
                <span className={styles.total}>Total ¥</span>
                <span className={styles.amount}>{cartdata.sumPrice}</span>
            </div>
            <button className={styles.pay}>去支付</button>
        </div>
        
    </Backdrop>
  )
}
