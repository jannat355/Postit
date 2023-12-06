import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import postit from '../src/assets/Postit 1.svg'
import face from '../src/assets/Group 366.svg'

const NavBar = () => {
  return (
    <div className=''>
       <div className='container d-flex justify-content-between p-3 sticky-top  '>
        <div className='d-flex'>
           <Link to='/' > <img src={postit} alt="" /></Link>
        </div>

       <div className='d-flex gap-3 align-items-center'>
      <Link to='/Stories' className='text-decoration-none text-dark'> <p>Stories</p></Link>
        <p>Contact</p>

     <Link to='/Welcome' className='text-decoration-none text-dark'>   <p>Sign in</p></Link>

   <Link to='/Join'>     <button className="btn btn-primary ">Get Started</button></Link>
   <img src={face} alt="" className='d-none d-lg-block' />
       </div>
       
       </div>

        <Outlet/>
    </div>
  )
}

export default NavBar