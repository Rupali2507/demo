import React from 'react'
import './Login.scss'
import video from '../../LoginAssets/video.mp4'
import  {Link} from 'react-router-dom'
import {logo } from '../../LoginAssets/logo.png'

const Login = () => {
  return (
   <div className='loginPage flex '>
    <div className='container flex'>
      <div className='videodiv'>
        <video src={video} autoPlay muted loop ></video>
        <div className="textDiv flex">
          <h2 className='title'>Vote For India</h2>
          <p>choose your leader</p>
        </div>
        <div className="footerDiv flex">
          <div className="text">Don't have an account?</div> /*change its css to inlineblock */
         <Link to= {'/register'}> 
         <button className='btn'>Sign Up</button>
         </Link>
        </div>
      </div>
      <div className="formDiv flex">
        <div className="headerDiv">
          <img src={logo} alt="Logo Image" />
          <h3>welcome back!</h3>
        </div>
      </div>
    </div>
   </div>
   
  )
}

export default Login
