import React, { useState } from 'react'
import './RavenHeader.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

let button_style = {
    fontSize: '25px',
    border: '2px solid lightgrey'
}
const RavenHeader = ({title}) => {
    const [icon, setIcon] = useState(faBars);
    const [attributes, setAttributes] = useState({
        width: '0px',
        visibility: 'hidden'
    })

    const handleClick = () => {
        if (icon === faBars)
        {
            setIcon(faClose);
            setAttributes({
                width: '220px',
                visibility: 'visible'
            });
        }
        else{
            setIcon(faBars);
            setAttributes({
                width: 0,
                visibility: 'hidden'
            });
        }
    };
    return (
        <>
        <header className='shadow bg-dark'>
            <nav>
                <h1 className='text-white'>{title}</h1>
                <button style={button_style} className='btn text-secondary bg-light' type='button'>
                    <FontAwesomeIcon onClick={handleClick} icon={icon}/>
                </button>
            </nav>
        </header>
        <nav style={attributes} className='overflow shadow bg-dark'>
            <Link to='/home' className='overflow_head'>{title}</Link>
        </nav>
        </>
    )
}

export default RavenHeader