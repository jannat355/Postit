import React from 'react'
import stay from '../src/assets/Rectangle 3.svg'
import '../styles/Home.css'
import lifestyle from '../src/assets/lifestyle.svg'
import life from '../src/assets/life.svg'
import nature from '../src/assets/nature.svg'
import technology from '../src/assets/technology.svg'
import nat from '../src/assets/nat.svg'
import tech from '../src/assets/tech.svg'
import trypostit from '../src/assets/Try Postit..svg'
import Footer from '../layouts/Footer'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className='banner-card'>
            <img src={stay} alt="" className='w-100'/>
          <div className='banner-text col-lg-6 align-items-center col-sm-12 '>
          <h1>STAY CURIOUS.</h1>
          <p className='col-lg-6 col-sm-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae eaque porro! Natus voluptatem corrupti, nesciunt error, optio et aliquam officiis tenetur nobis hic debitis, sint deleniti ullam esse temporibus.</p>
          <Link to='/Join'>     <button className="btn btn-primary ">Get Started</button></Link>
          </div>
        </div>

        <div className='container pt-5 py-5 '>
            <div className='border d-flex gap-3 pt-4 px-5 col-sm-12'>
                <div  >
                   <img src={lifestyle} alt="" />
                   </div>
                   
                   <div className='row gap-1'>
                   <h5><img src={life} alt="" /></h5> 
                   <br />
                   <p>The 20 biggest Fashion companies in Nigeria 2022</p>
                </div>
                <div  >
                   <img src={nature} alt="" />
                   </div>
                   
                   <div className='row gap-1'>
                   <h5><img src={nat} alt="" /></h5> 
                   <br />
                   <p>The 20 biggest Agro companies in Nigeria 2022</p>
                </div>
                <div  >
                   <img src={technology} alt="" />
                   </div>
                   
                   <div className='row gap-1'>
                   <h5><img src={tech} alt="" /></h5> 
                   <br />
                 
                   <p>The 20 biggest Fintech companies in Nigeria 2022</p>
                </div>
               
            </div>
        </div>

        <div className=' container overlay gap-5  '>
            <div className='container hit-img  '>
            <img src={trypostit} alt="" className=' ' />
             
            <p>Do you want to write or discover stories from any writers on any topic ?</p>
                 <div className='rounded-pill w-100'>
                    
            <form action="">
                <input type="text" placeholder='Enter  Email address' className='getStartInput'/>
                <button className="button">Get Started</button>
            </form>
                 </div>
            </div>
            
          
            <Footer/>
          
        </div>
        
    </div>
    
  )
}

export default Home