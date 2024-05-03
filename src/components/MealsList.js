import React from 'react'
import './MealsList.css'
import MealItem from './MealItem.js'

export default function MealsList(props) {


  const mealItems = props.mealsData.map(item => 
                                        <MealItem key={item.id} item={item} />)


  return <div className='meals'>
      {mealItems}
      <div className='blank'></div>
      
  </div>
  
}
