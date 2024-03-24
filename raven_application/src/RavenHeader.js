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
    const [condition, setCondition] = useState(false);
    const [icon, setIcon] = useState(faBars);

    const handleClick = () => {
        setCondition(!condition);
        if (icon === faBars)
        {
            setIcon(faClose);
        }
        else{
            setIcon(faBars);
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
        {
            condition && 
            <nav className='overflow bg-dark shadow'>
                <Link to='/home' className='overflow_head'>{title}</Link>
            </nav>
        }
        </>
    )
}

export default RavenHeader