import React from 'react'
import Header from './components/Header'
import MainPage from './screens/MainPage'
import Footer from './components/Footer'
import {BrowserRouter, Routes, Route } from "react-router-dom"
import MyNotes from './screens/MyNotes'


function App() {
  return (
    <BrowserRouter>
     <Header />
     <main>
      
      <Routes>
      <Route path='/' element={<MainPage />} exact/>
      <Route path='/mynotes' element={<MyNotes />} />
      </Routes>
    
     </main>
     <Footer />
    
    </BrowserRouter>
  );
}

export default App;
