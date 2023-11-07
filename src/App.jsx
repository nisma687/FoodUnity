
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './shared/nav'
import Footer from './shared/Footer/Footer'
// import Home from './Pages/Home/Home'



function App() {
  

  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar />

      
      
      <Outlet />
      <Footer />
     
    </div>
  )
}

export default App
