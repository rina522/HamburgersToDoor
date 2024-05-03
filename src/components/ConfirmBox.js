import React, {Fragment, useContext} from 'react'
import CartContext from '../store/CartContext'
import Backdrop from '../UI/Backdrop/Backdrop'
import './ConfirmBox.css'

export default function ConfirmBox(props) {

    const cartdata = useContext(CartContext)
    
    const noClear=(e)=>{
        props.noClear()
        e.stopPropagation()

    }

    const yesClear=()=>{
        cartdata.clearCartData()
        props.hideCart()
    }


    return (
        <Backdrop onClick={e => e.stopPropagation()} className='back'>
            <div onClick={e => e.stopPropagation()} className='confirmBox'>
                <div className='reminder'>该操作不可恢复，确认清空购物车吗？</div>
                <div className='buttons'>
                    <button onClick={noClear} className='button cancle'>取消</button>
                    <button onClick={yesClear} className='button ensure'>确认</button>
                </div>
                
            </div>   
        </Backdrop>
        
    )
}
