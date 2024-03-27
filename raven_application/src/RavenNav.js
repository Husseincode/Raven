import React from 'react'
import RavenApp from './RavenApp';
import RavenMiniCalculator from './RavenMiniCalculator';
import ErrorPage from './ErrorPage';
import GrpStat from './grp_stat';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const RavenNav = () => {
    return (
        <Router>
            <Routes>
                <Route Component={RavenApp} path='/home' exact/>
                <Route Component={RavenMiniCalculator} path='/calculator'/>
                <Route Component={GrpStat} path='/grp_stat'/>
                <Route Component={ErrorPage} path='*'/>
            </Routes>
        </Router>
    )
}

export default RavenNav;