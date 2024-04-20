import React from 'react'
import './notification.css'

const Notification = ({color, message, width}) => {
    return <div style={{borderBottom: `2px solid ${color}`, height: `${width}`}} className='notify shadow'>
        <p className='fw-bolder' style={{color: `${color}`}}>{message}</p>
    </div>
}

export default Notification