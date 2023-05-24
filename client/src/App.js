import React, { Components } from 'react'
import Header from './components/Header'
import Screen from './components/Screen'
import Footer from './components/Footer'
import {BrowserRouter, Routes, Route } from "react-router-dom"
import MyNotes from './components/MyNotes'
import './App.css';

function App() {
  return (
    <BrowserRouter>
     <Header />
     <main>
      
      <Routes>
      <Route path='/' component={Screen } exact/>
      <Route path='/mynotes' Component={()=> <MyNotes />} />
      </Routes>
    
     </main>
     <Footer />
    
    </BrowserRouter>
  );
}

export default App;
