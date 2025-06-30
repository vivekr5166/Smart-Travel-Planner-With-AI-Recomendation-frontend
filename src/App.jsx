import React from 'react'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './pages/homepage/Home'
import Packages from './pages/packages/Packages'
import Signup from './pages/Auth/Signup'
import Login from './pages/Auth/Login'
import Footer from './components/footer/Footer'
import TravelDetails from './pages/Output/TravelDetails'
import Locations from './pages/locations/Locations'
import Things_To_Do from "./pages/things/Things_To_Do"



const App = () => {
  return (
    <div>
      <Navbar/>
     
      {/* <Home/> */}
     <div className='mt-16'>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/packdege" element={<Packages />}> </Route>
        <Route path="/locations" element={<Locations />}> </Route>
        <Route path="/things" element={<Things_To_Do />}> </Route>
        <Route path="/Signup" element={<Signup />}> </Route>
        <Route path="/login" element={<Login />}> </Route>
        <Route path="/traveldetail" element={<TravelDetails />}> </Route>

      </Routes>
       <Footer/>
</div>
    </div>
  )
}

export default App
