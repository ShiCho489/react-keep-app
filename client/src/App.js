import React from 'react'
import Header from './components/Header'
import MainPage from './screens/MainPage'
import Footer from './components/Footer'
import {BrowserRouter, Routes, Route } from "react-router-dom"
import MyNotes from './screens/MyNotes'
import LoginPage from './screens/LoginScreen/LoginPage'
import RegisterPage from './screens/RegisterScreen/RegisterPage'
import { useState } from "react";


function App() {

  const [search, setSearch] = useState("");
  return (
    <BrowserRouter>
     <Header setSearch={(s) => setSearch(s)}/>
     <main>
      
      <Routes>
      <Route path='/' element={<MainPage />} exact/>
      <Route path='/login' element={<LoginPage />} exact />
      <Route path='/register' element={<RegisterPage />} exact />
       <Route path='/mynotes' element={({ history }) => (
        <MyNotes search={search} history={history}/> 
       )}
       />


      </Routes>
    
     </main>
     <Footer />
    
    </BrowserRouter>
  );
}

export default App;
