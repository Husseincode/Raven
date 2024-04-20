import React, { useState } from 'react'
import './RavenHeader.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faEnvelopeCircleCheck, faHome, faInfo, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { details } from '../Data/details'

let button_style = {
    fontSize: '25px',
    border: '2px solid lightgrey',
    height: '55px',
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
                <h1>
                    <Link className='text-white' style={{textDecoration: 'none'}} to='/home'>{title}</Link>
                </h1>
                <button style={button_style} className='btn text-secondary bg-light' type='button'>
                    <FontAwesomeIcon onClick={handleClick} icon={icon}/>
                </button>
            </nav>
        </header>
        <nav style={attributes} className='overflow shadow bg-dark'>
            <div className='dashboard'>
                <Link to='/home' className='text-secondary'>Home <FontAwesomeIcon icon={faHome}/></Link>
                <Link to='/about' className='text-secondary'>About <FontAwesomeIcon icon={faInfoCircle}/></Link>
                <Link to={details.email} className='text-secondary'>Developer <FontAwesomeIcon icon={faEnvelopeCircleCheck}/></Link>
            </div>
        </nav>
        </>
    )
}

export default RavenHeader