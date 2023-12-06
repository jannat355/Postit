import React from 'react'
import '../styles/Create.css'
import editicon from '../src/assets/edit.svg'

const CreateStory = () => {
  return (
    <div className='container'>
      <div >
        <h1>Create Story</h1>
      </div>
       <div className="fieldset-container m-5 h-25">
      <img src={editicon} alt="" className='fieldset-title'/>
          <input
            type="text"
            className="w-100 "
            placeholder="Title"
            
          />
        
      </div>

     
      <div className="fieldset-container m-5 h-25">
      <img src={editicon} alt="" className='fieldset-title'/>
         
          <input
            type="text"
            className="w-100 "
            placeholder="Tags" 
            
          />
        
      </div>
      <div className="field-container m-5 ">
      <img src={editicon}alt="" className='field-title' />
         
          <input
            type="text"
            className="w-100 cot h-75 "
            placeholder="Write your Story ....."
            
          />
        
      </div>

      <div className='text-center mt-5'>
        <button className="btn btn-primary dot">Publish Story</button>
      </div>



    </div>
  )
}

export default CreateStory