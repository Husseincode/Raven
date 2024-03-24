import React, { useEffect, useState } from 'react'
import LoadingScreen from './LoadingScreen'
import 'bootstrap/dist/css/bootstrap.min.css'
import RavenHeader from './RavenHeader'
import RavenMain from './RavenMain'
import RavenFooter from './RavenFooter'
import { details } from './details'

const RavenApp = () => {
    const [loading, setIsLoading] = useState(true);
    useEffect(()=>{
        window.addEventListener('load', ()=>{
            setIsLoading(false); /**false */
        });
        setTimeout(() => {
            setIsLoading(false);
        }, 5000);
        document.title = 'Raven';
        document.body.setAttribute('class', 'text-white')
    })
    if (loading)
    {
        return (
            <LoadingScreen/>
        )
    }
    return (
        <>
        <RavenHeader {...details}/>
        <RavenMain {...details}/>
        <RavenFooter {...details}/>
        </>
    )
}

export default RavenApp