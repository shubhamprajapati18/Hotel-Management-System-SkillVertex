import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import SignInForm from './auth/SignInForm'
import SignUpForm from './auth/SignUpForm'
import ForgotPass from './auth/ForgotPass'
import LinkSent from './auth/LinkSent'
import ResetPass from './auth/ResetPass'
import Home from './pages/Home'

function AppContent() {
  return (
    <>
    
      <Routes>

        <Route path='/sign-in' element={<SignInForm/>} />
        <Route path='/sign-up' element={<SignUpForm/>} />
        <Route path='/forgot-password' element={<ForgotPass/>} />
        <Route path='/reset-pass-link-sent' element={<LinkSent/>} />
        <Route path='/reset-pass' element={<ResetPass/>} />
        <Route path='/' element={<Home/>} />

      </Routes>
      
    </>
  )
}

function App() {
  return <AppContent />;
}


export default App;
