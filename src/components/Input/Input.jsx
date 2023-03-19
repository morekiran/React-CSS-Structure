import React from 'react'
import "./Input.css"
import{FaSearch} from "react-icons/fa"

const Input = () => {
  return (
    <div className='input-container'>
      <input type="text" placeholder='Search Products'></input>
      <button><FaSearch className='search-butn'/></button>
    </div>
  )
}

export default Input