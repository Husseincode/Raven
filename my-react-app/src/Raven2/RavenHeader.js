import React from 'react'
import './RavenHeader.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

let button_style = {
    fontSize: '25px',
    border: '2px solid lightgrey'
}
const RavenHeader = ({title}) => {
    return (
        <header className='shadow bg-primary'>
            <nav>
                <h1>{title}</h1>
                <button style={button_style} className='btn text-secondary bg-light' type='button'>
                    <FontAwesomeIcon icon={faBars}/>
                </button>
            </nav>
        </header>
    )
}

export default RavenHeader