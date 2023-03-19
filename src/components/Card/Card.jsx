import React from 'react'
import "./Card.css"
import {FiFlag} from "react-icons/fi"
import CardImage from "../Assets/card-image.webp"
import WorkImage from "../Assets/work-image.jpg"
import ReactImage from "../Assets/react-image.png"

const Card = () => {
  return (
<div className='Card-container'>

    <div className='card'>
     <img src={CardImage} alt="card" />
     <h3>PREMIUM</h3>
     <h2>Material Dashboard Pro</h2>
     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quos quam ratione non doloremque commodi maiores numquam eum ea culpa.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, ea.</p>
     <button>SEE DETAILS</button>
    </div>

    <div className='card'>
     <img src={WorkImage} alt="card" />
     <h3>THEMES</h3>
     <h2>NextJS Material Kit</h2>
     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse, ut?consectetur adipisicing elitLorem ipsum dolor sit amet, Lorem ipsum dolor sit amet.consectetur adipisicing elit. Minima, ea.</p>
     <button>SEE DETAILS</button>
    </div>

    <div className='card last-card'>

      <div className='last-image'>
        <img src={ReactImage} alt="" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, esse.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div>
           <h2><FiFlag/>Tags</h2>
           <div className='last-container'>
               <div className='text'>
                <h4>REACT</h4>
                <h4>85</h4>
               </div>
               <hr/>
               <div className='text'>
                <h4>GITHUB</h4>
                <h4>75</h4>
               </div>
               <hr/>
               <div className='text'>
                <h4>OPEN SOURCE</h4>
                <h4>75</h4>
               </div>
               <hr/>
               <div className='text'>
                <h4>FREE</h4>
                <h4>62</h4>
               </div>
               <hr/>
               <div className='text'>
                <h4>COMPONENTS</h4>
                <h4>47</h4>
               </div>
               <hr/>
               <div className='text'>
                <h4>OTHERS</h4>
                <h4>45</h4>
               </div>
               <hr/>
               <div className='text'>
                <h4>ELEMENTS</h4>
                <h4>44</h4>
               </div>
               <hr/>
               <div className='text'>
                <h4>UI</h4>
                <h4>25</h4>
               </div>
               <hr/>
               <div className='text'>
                <h4>APP</h4>
                <h4>17</h4>
               </div>
               <hr/>
               
               
           </div>

      </div>

    </div>

</div>
  )
}

export default Card