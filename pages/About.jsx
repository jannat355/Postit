import React from 'react'
import '../styles/About.css'
import keypad from '../src/assets/keyboard.svg'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <div>


      <div className='container '>
      <div className="row my-5 align-items-center justify-content-between">
    
      <div className='col-lg-6  col-sm-12 pt-5 '>
        <h1>Welcome Maria,</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit ut doloremque autem quia, ab quos eaque recusandae rerum. At, assumenda sed. Facilis architecto eos distinctio quas, alias praesentium quod laboriosam unde, hic amet aspernatur neque vitae qui reiciendis deleniti, odio voluptatum veritatis nobis nisi eaque magnam? Facere neque id aperiam.</p>
       <div className='gap-5'>
     <Link to='/CreateStory'>  <button className="btn btn-primary w-25">My Stories</button></Link>
        <button className="btn text-primary both w-25 ">Go to Feed</button>
       </div>
      </div>
       
       <div className="col-sm-12 col-lg-5">
        <img src={keypad} alt="" className='img-fluid' />
       </div>

      
      </div>

      
      </div>
     
    </div>
  )
}

export default About