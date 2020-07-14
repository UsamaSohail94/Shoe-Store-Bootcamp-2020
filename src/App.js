import React, {createContext} from 'react';
import './App.css';
import shoeData from './DummyData'

import {Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import NewArrival from './components/NewArrival/NewArrival'
import NewArrivalIndex from './components/NewArrivalIndex/NewArrivalIndex'
import Shoe from './components/Shoe/Shoe'

export const productContext = createContext()

function App() {  

  return (
    <div className="App">
    <productContext.Provider value={shoeData}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="newArrival" element={<NewArrival />}>
          <Route path="/" element={<NewArrivalIndex />} />
          <Route path=":shoeID" element={<Shoe />} />
        </Route>
      </Routes>
    </productContext.Provider>
    </div>
  );
}

export default App;
