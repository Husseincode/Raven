import React from 'react'
import RavenApp from '../RavenApp';
import RavenMiniCalculator from '../Simple_Calculator/RavenMiniCalculator';
import ErrorPage from '../Page_Component/ErrorPage';
import GrpStat from '../Statistics/grp_stat';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UngrpStat from '../Statistics/ungrp_stat';

const RavenNav = () => {
    return (
        <Router>
            <Routes>
                <Route Component={RavenApp} path='/home' exact/>
                <Route Component={RavenMiniCalculator} path='/calculator'/>
                <Route Component={GrpStat} path='/grp_stat'/>
                <Route Component={UngrpStat} path='/ungrp_stat'/>
                <Route Component={ErrorPage} path='*'/>
            </Routes>
        </Router>
    )
}

export default RavenNav;