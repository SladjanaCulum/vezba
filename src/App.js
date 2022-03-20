import React from "react";
import './App.css';
import { HomePage } from './components/HomePage/HomePage';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Locations } from "./components/Locations/Locations";
import { SingleLocation } from "./components/SingleLocation/SingleLocation";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/singlelocation/:id" element={<SingleLocation />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
