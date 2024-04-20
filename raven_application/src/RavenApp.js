import React, { useEffect, useState } from 'react'
import LoadingScreen from './Loading_Screen/LoadingScreen'
import 'bootstrap/dist/css/bootstrap.min.css'
import RavenHeader from './Page_Component/RavenHeader'
import RavenMain from './Page_Component/RavenMain'
import RavenFooter from './Page_Component/RavenFooter'
import { details } from './Data/details'

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
        document.body.setAttribute('class', 'text-white');
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