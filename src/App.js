import React from "react"
import {  Route, Routes } from "react-router-dom"
import Openeye from "./Components/pages/Openeye"
import Whyus from "./Components/pages/Whyus"
import Customer from "./Components/pages/Customer"

import Navbar from "./Components/Navbar"
import Ourfixes from "./Components/pages/Ourfixes"
import Growth from "./Components/pages/Growth"
function App() {
  return (
    <>
      <Navbar/>
      <div className="container">
       
        <Routes>
          <Route path="/" element={<Whyus/>} />
          <Route path="/our" element={<Ourfixes/>} />
          <Route path="/growth" element={<Growth/>} />
          <Route path="/eye" element={<Openeye/>} />
          <Route path="/customer" element={<Customer/>} />
        </Routes>
      </div>
    </>
  )
}

export default App