import React from 'react'
import "./Navbar.css"
import {FaTwitter,FaGithub,FaFacebookF,FaReact} from "react-icons/fa"

const Navbar = () => {
  return (
    <div className='home-container'>
    <div className='left'>
    <p><FaReact size="25px" color='aqua'/></p>
    <p>React</p>
    <p>Theams</p>
    <p>Dashboards</p>
    <p>Elements</p>
    <p>Others</p>
     </div>
     {/* === */}
        <div className='right'>
            <p>Blog</p>
            <li><FaFacebookF/></li>
            <li><FaTwitter/></li>
            <li><FaGithub/></li>
            <button> + SUBMIT PRODUCT</button>

        </div>
</div>

  )
}

export default Navbar