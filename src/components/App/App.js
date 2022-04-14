import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import { NavBar } from '../NavBar/NavBar';
import { SideBar } from '../SideBar/SideBar';
import SignUpForm from '../../views/signup';

function App() {
  return (
    <div className="App">
      <NavBar />
      <SideBar />
      <Routes>
        <Route path="signup" element={<SignUpForm />} />
      </Routes>
    </div>
  );
}

export default App;
