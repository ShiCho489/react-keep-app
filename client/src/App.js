import React from 'react'
import Header from './components/Header'
import MainPage from './screens/MainPage'
import Footer from './components/Footer'
import {BrowserRouter, Routes, Route } from "react-router-dom"
import MyNotes from './screens/MyNotes'
import LoginPage from './screens/LoginScreen/LoginPage'
import RegisterPage from './screens/RegisterScreen/RegisterPage'


function App() {
  return (
    <BrowserRouter>
     <Header />
     <main>
      
      <Routes>
      <Route path='/' element={<MainPage />} exact/>
      <Route path='/login' element={<LoginPage />} exact />
      <Route path='/register' element={<RegisterPage />} exact />
       <Route path='/mynotes' element={<MyNotes />} />


      </Routes>
    
     </main>
     <Footer />
    
    </BrowserRouter>
  );
}

export default App;
