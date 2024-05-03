import React, {useState, useContext} from 'react'
import styles from './SumBox.module.css'
import CartContext from '../store/CartContext'
import Cart from './Cart'
import bagIcon from '../assets/bag.png'
import Checkout from './Checkout'

export default function SumBox(props) {

  const cartdata = useContext(CartContext)
  
  const [showCart, setShowCart] = useState(false)
  const [showCheckout, setShowCheckout] = useState(false)




  const cartHandler = ()=>{
    if (cartdata.sumNumber === 0)return;
    setShowCart(!showCart) }

  const hideCart = ()=>{
    setShowCart(false)
  }

  const checkout = ()=>{
    if (cartdata.sumNumber === 0)return;
    setShowCheckout(true)

  }

  const closeCheckout = ()=>{
    setShowCheckout(false)
  }

  return (
    <div onClick={cartHandler} className={styles.sumBox}>

      {showCart === true && <Cart cartItems={props.cartItems} hideCart={hideCart}/>}

      {showCheckout === true && <Checkout closeCheckout={closeCheckout}/>}

      <img className={styles.bag} src={bagIcon}/>
      {cartdata.sumNumber > 0? <span className={styles.sumNumber}>{props.sum}</span> : null}
      
      
      <div className={styles.greyBar}>
        {cartdata.sumNumber === 0? <div className={styles.text}>未选购商品</div> :
                                  (<div className={styles.sumPrice}>
                                    <span className={styles.icon}>¥</span>
                                    <span className={styles.amount}>{cartdata.sumPrice}</span>
                                  </div>)}
        <button onClick={checkout} className={`${styles.disabled} ${cartdata.sumNumber > 0? styles.checkout : ''}`}>去结算</button>
      </div>
      
    </div>)
}
