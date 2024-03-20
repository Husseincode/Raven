import React, { useEffect, useState } from 'react'
import RavenHeader from './RavenHeader'
import RavenFooter from './RavenFooter'
import LoadingScreen from './LoadingScreen'
import { details } from './details'

const RavenMiniCalculator = () => {
    const [loading, setIsLoading] = useState(true);
    useEffect(()=>{
        window.addEventListener('load', ()=>{
            setIsLoading(false);
        })
        /**if webpage fails to load */
        setTimeout(() => {
            setIsLoading(false);
        }, 5000);
        document.body.setAttribute('class', 'bg-dark text-white');
    }, []);
    if (loading)
    {
        return(
            <LoadingScreen/>
        );
    }
    return (
        <>
        <RavenHeader title={details.title}/>
        {
            <main></main>
        }
        <RavenFooter/>
        </>
    )
}

export default RavenMiniCalculator