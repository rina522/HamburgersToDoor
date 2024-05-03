import React, {useState} from 'react'
import CartItem from './CartItem'
import './Cart.css'
import Backdrop from '../UI/Backdrop/Backdrop'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons'
import ConfirmBox from './ConfirmBox'

export default function Cart(props) {

  const [confirmBox, setConfirmBox]=useState(false)

  const clearCart=()=>{
    setConfirmBox(true)
  }

  const cancleClear=()=>{
    setConfirmBox(false)
  }

  const hideCart=()=>{
    props.hideCart()
  }


                                              
  return (
    <Backdrop>
      {confirmBox && <ConfirmBox noClear={cancleClear} hideCart={hideCart}/>}
      <div className='cart' onClick={e => e.stopPropagation()}>
        <div className='cartTop'>
          <div className='shoppingCart'>
            <FontAwesomeIcon icon={faCartShopping}/>
            <span className='cartText'>Cart</span>
          </div>
          
          <span onClick={clearCart} className='clear'>
            <FontAwesomeIcon icon={faTrash}/>
            <span>clear</span>
          </span> 
        </div>

       {props.cartItems.map(item => <CartItem
                                                  key={item.id}
                                                  item={item} />)}

      </div>
      
      
    </Backdrop>
  )
}
