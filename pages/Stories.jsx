import React from 'react'
import grey from '../src/assets/grey.svg'
import stay from '../src/assets/Postit 1.svg'
import keypad from '../src/assets/keyboard.svg'
import '../styles/Stories.css'
import info from '../src/assets/Group 350.svg'

const Stories = () => {
  return (
    <div>
      <div className=' ban pt-5'>
          <img src={grey} alt="" className='w-100'/>
          </div>
      <div className=' container banner col-lg-6 align-items-center col-sm-12 '>
          <h1>You've got a story,</h1>
          <p><img src={stay} alt="" /></p>
          <p className='col-lg-6 col-sm-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis recusandae eaque porro! Natus voluptatem corrupti, nesciunt error, optio et aliquam officiis tenetur nobis hic debitis, sint deleniti ullam esse temporibus.</p>
          </div>

          <div className='banner-img '>
              <img src={keypad} alt="" />
          </div>

          <div className='container'>
            <img src={info} alt="" />
          </div>
     
    </div>
  )
}

export default Stories