import React from 'react'
import ReactDOM from 'react-dom'
import './Backdrop.css'

const backdropRoot = document.getElementById('backdrop')

export default function Backdrop(props) {

  return ReactDOM.createPortal(
    <div {...props} className={`backdrop ${props.className}`}>
      {props.children}
    </div>, backdropRoot)
  
}

