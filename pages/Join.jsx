import React from 'react'
import '../styles/Join.css'
import { Link } from 'react-router-dom'

const Join = () => {
  return (
    <div >
        <div className='container text-center py-5 '>
        <div  className=''>
        <h3>Join Post<span style={{color: "blue"}}>it</span></h3>
        </div>

        <div className=' container w-50 pt-5 '>
          <h5>Enter your email address to create an account on Post<span style={{color: "blue"}}>it</span></h5> 
          <br />        
          <p>Username</p>
          <br />
          <hr />
          <br />        
          <p>Email Address</p>
          <br />
          <hr />
          <br />        
          <p>Password</p>
          <br />
          <hr />
        <div className='pt-5'>
        <Link to='/About'> <button className="btn btn-primary w-50 ">Continue</button></Link>

          <h4 className='pt-5'>Already have an account? <Link to='/Welcome' className='text-decoration-none'><span style={{color: "blue"}}>Sign In</span></Link></h4>
        </div>
       
        </div>

        

        </div>
    </div>
  )
}

export default Join