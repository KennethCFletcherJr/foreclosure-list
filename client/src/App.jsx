import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import MainView from "./views/MainView.jsx";
import PropertyDetail from './views/PropertyDetail.jsx';
import PropertyUpdate from './views/PropertyUpdate.jsx'

function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainView />} />
          <Route path="/properties/:id/details" element={<PropertyDetail />} />
          <Route path="/properties/:id/edit" element={<PropertyUpdate />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
