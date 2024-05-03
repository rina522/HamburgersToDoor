import React from 'react'
import './CartItem.css'
import Counter from '../UI/Counter/Counter'

export default function CartItem(props) {
  return (
    <div className='mealItem'>
      <img className='img' src={props.item.img}></img>

      <div className='brief'>
        <h3 className='title'>{props.item.title}</h3>
        <Counter item={props.item}/>
      
        
      </div>
    </div>
  )
}
