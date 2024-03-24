import React from 'react'
import RavenApp from './RavenApp';
import RavenMiniCalculator from './RavenMiniCalculator';
import ErrorPage from './ErrorPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const RavenNav = () => {
    return (
        <Router>
            <Routes>
                <Route element={<RavenApp/>} path='/home' exact/>
                <Route element={<RavenMiniCalculator/>} path='/calculator'/>
                <Route element={<ErrorPage/>} path='*'/>
            </Routes>
        </Router>
    )
}

export default RavenNav;