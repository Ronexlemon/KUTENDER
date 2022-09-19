import React from 'react';
//import logo from './logo.svg';
import Tenders from './components/tenderpost/Tenders';
import { useState } from "react";
import BiderForm from './components/biderpostform/BiderForm';
import TenderAllocation  from './components/tenderallocation/tenderAllocation';
import {Helmet} from 'react-helmet';
import './App.css';
import Home from "./components/home/Home";
import { BrowserRouter,Router,Route, Routes } from 'react-router-dom';
import DisplayTenders from './components/tenderpost/DisplayAvailableTenders';
import Available from './components/tenderpost/Available';
import Approve from './components/approve/Approve';
import AvailableTenders from './components/tenderpost/AvailableTenders';


function App() {
  
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/Tenders' element={<Tenders />}/>
    <Route path='/BiderForm' element={<BiderForm/>}/>
    <Route path='/TenderAllocation' element={<TenderAllocation/>}/>
    <Route path='/DisplayAvailableTenders' element={<DisplayTenders/>}/>
    <Route path='/Available' element={<Available/>}/>
    <Route path='/AvailableTenders' element={<AvailableTenders/>}/>
    <Route path='/Approve' element={<Approve/>}/>
    </Routes>
    </BrowserRouter>
      </div>
    
  );
}

export default App;
