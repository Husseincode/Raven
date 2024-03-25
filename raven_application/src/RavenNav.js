import React from 'react'
import RavenApp from './RavenApp';
import RavenMiniCalculator from './RavenMiniCalculator';
import ErrorPage from './ErrorPage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const RavenNav = () => {
    return (
        <Router basename='/home'>
            <Routes>
                <Route Component={RavenApp} path='/home' exact/>
                <Route Component={RavenMiniCalculator} path='/calculator'/>
                <Route Component={ErrorPage} path='*'/>
            </Routes>
        </Router>
    )
}

export default RavenNav;