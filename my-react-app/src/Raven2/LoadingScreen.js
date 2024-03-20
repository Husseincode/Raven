import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import './LoadingScreen.css'

const LoadingScreen = () => {
    return (
        <div className='loading'>
            <p>Loading <FontAwesomeIcon icon={faSpinner} spin/></p>
        </div>
    )
}

export default LoadingScreen