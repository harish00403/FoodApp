import React from 'react'
import { Navbar } from './Components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home/Home'
import { Cart } from './Pages/Cart/Cart'
import { PlaceOder } from './Pages/PlaceOrder/PlaceOrder'
import './App.css' 
import Footer from './Components/Footer/Footer'
import LoginPopup from './Components/LoginPopup/LoginPopup'
const App = () => {

  const[showLogin,setShowLogin]=React.useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
     <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOder/>}/>
      </Routes>
    </div>
    <Footer/>
    
    
    </>
   
  )
}

export default App