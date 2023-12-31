import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from '../Layout'
import Home from '../Pages/Home'
import Html from '../Pages/Html'
import Css from '../Pages/Css'
import Js from '../Pages/Js'


const Routing= () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
              <Route index element={<Home/>}/> 
              <Route path="/html" element={<Html/>}/> 
              <Route path="/css" element={<Css/>}/> 
              <Route path="/js" element={<Js/>}/> 
              {/* <Route path="*" element={<h1>Page Not found</h1>}/>  */}
             
            </Route>
            
        </Routes>
    </BrowserRouter>
  )
}

export default Routing