import React from 'react'
import styles from './Search.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function Search(props) {

  const filter = (e)=>{
    props.onFilter(e.target.value.trim())

  }



  return (
    <div className={styles.topBar}>
        <div className={styles.searchBar}>
            <FontAwesomeIcon className={styles.searchIcon} icon={faMagnifyingGlass} /> 
            <input onChange={filter} className={styles.input} type='text' placeholder='请输入关键字'/>
        </div>
      
    </div>
  )
}
