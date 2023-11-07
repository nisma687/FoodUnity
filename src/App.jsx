
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './shared/nav'
import Footer from './shared/Footer/Footer'
import Home from './Pages/Home/Home'



function App() {
  

  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar />

      <h1 className='text-2xl mt-2 mb-2 italic
      font-bold text-purple-500
      text-center'>Welcome to</h1>
      <h1 className='text-xl text-center italic
      text-orange-500 font-bold
      mb-2'>FOOD UNITY NETWORK</h1>
      
      <Outlet />
      <Footer />
     
    </div>
  )
}

export default App
