import React from 'react'
import Home from './home'
import About from './about'
import ErrorPage from './error'
import Main from './main'
import Navbar from './Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route Component={Home} path='/home'/>
        <Route Component={About} path='/about'/>
        <Route Component={Main} path='/main'/>
        <Route Component={ErrorPage} path='*'/>
    </Routes>
    </BrowserRouter>
  )
}

export default App