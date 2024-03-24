import React from 'react'
import './ErrorPage.css'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='error text-dark'>
            <h1>Error 404</h1>
            <p className='text-center'>Page not found</p>
            <Link type='button' className='btn btn-dark btn-sm text-center' to='/home'>Go Home</Link>
        </div>
    )
}

export default ErrorPage
