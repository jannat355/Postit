import { useState } from 'react'
import{BrowserRouter,Routes,Route} from "react-router-dom"
import Home from '../pages/Home'
import NavBar from '../layouts/NavBar'
import Join from '../pages/Join'
import Welcome from '../pages/Welcome'
import About from '../pages/About'
import CreateStory from '../pages/CreateStory'
import Stories from '../pages/Stories'
// import Footer from '../layouts/Footer'
// import Footer from '../layouts/Footer'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      
      <Route element={<NavBar/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/CreateStory' element={<CreateStory/>}/>
        <Route path='/Stories' element={<Stories/>}/>
      
      </Route>
      
         <Route path='/Welcome' element={<Welcome/>}/>
          <Route path='/Join' element={<Join/>}/>
       
         

       
      
    </Routes>
    
    
    </BrowserRouter>
    </>
  )
}

export default App
