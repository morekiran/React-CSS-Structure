import React from 'react'
import "./Home.css"
import {FaReact} from "react-icons/fa"
import Book from "../Assets/Book.jpg"

const Home = () => {
  return (
    <>
{/* ==== */}
<div className='middle-container'>
   <div>
  <p><FaReact size="50px" color='skyblue'/></p>
  <h1>Made With React</h1>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolores saepe iste ipsum consectetur voluptate ut ea inventore neque beatae!Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Optio, ducimus.Lorem ipsum dolor sit amet consectetur adipisicing.consequuntur modi voluptates numquam odit blanditiis porro odio accusantium saepe?</p>
  <input type="text" placeholder='Enter Your Email' />
  <button>Subscribe</button>
   </div>

   <div>
   <img src={Book}alt="office" width="50%" />
   </div>
   
</div>

</>
  )
}

export default Home