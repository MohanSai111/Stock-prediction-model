import React from 'react'
import './assets/css/style.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'

const App = () => {
  return (
    <div>
    <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
     </Routes>
     <Footer/>
      </BrowserRouter>
      
    </div>
  )
}

export default App
