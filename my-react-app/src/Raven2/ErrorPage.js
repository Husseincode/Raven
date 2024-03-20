import React, { useEffect } from 'react'
import './ErrorPage.css'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    useEffect(()=>{
        document.body.setAttribute('class', 'bg-dark text-white');
    })
    return (
        <div className='error'>
            <h1>Error 404</h1>
            <p className='text-center'>Page not found</p>
            <Link type='button' className='btn btn-primary btn-sm text-center' to='/home'>Go Home</Link>
        </div>
    )
}

export default ErrorPage
