import React from 'react'
import './RavenFooter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { data } from './data'

const RavenFooter = ({title, whatsappHref, twitterHref, email, gitHubHref}) => {
    return (
        <footer className='text-secondary bg-dark'>
            <section className='text-center'>
                <h3>{title}</h3>
                <p>
                    {title} is an online web application that is meticulously designed to
                    solve complex mathematical problem, it has {data.length} calculators that are
                    built in and 
                    are fully functional and accurate in processing result.
                    should you happento encounter some error in the program, do not hesistate to tip us,
                    your little piece of info could help the web application to get even better.
                </p>
                <div className='icons'>
                    <Link title='Github' className='icon_style text-secondary' to={gitHubHref}>
                        <FontAwesomeIcon icon={faGithub}/>
                    </Link>
                    <Link title='Email' className='icon_style text-secondary' to={email}>
                        <FontAwesomeIcon className='icon_style' icon={faEnvelopeCircleCheck}/>
                    </Link>
                    <Link title='Whatsapp' className='icon_style text-secondary' to={whatsappHref}>
                        <FontAwesomeIcon className='icon_style' icon={faWhatsapp}/>
                    </Link>
                    <Link title='Twitter' className='icon_style text-secondary' to={twitterHref}>
                        <FontAwesomeIcon className='icon_style' icon={faXTwitter}/>
                    </Link>
                </div>
                <p className='p-1'>&copy;{title} <time>2024</time></p>
            </section>
        </footer>
    )
}

export default RavenFooter
