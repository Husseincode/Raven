import React from 'react'
import './RavenFooter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const RavenFooter = ({title, whatsappHref, twitterHref, email, gitHubHref}) => {
    return (
        <footer className='bg-dark text-secondary'>
            <section className='text-center'>
                <h3>{title}</h3>
                <p>Lorem ipsum dit amet Lorem ipsum dit amet Lorem ipsum dit amet</p>
                <div className='icons'>
                    <FontAwesomeIcon href={gitHubHref} title='Github' className='icon_style' icon={faGithub}/>
                    <FontAwesomeIcon title='Emaiil' className='icon_style' icon={faEnvelope}>
                        <a href={email}>l</a>
                    </FontAwesomeIcon>
                    <FontAwesomeIcon href={whatsappHref} title='Whatsapp' className='icon_style' icon={faWhatsapp}/>
                    <FontAwesomeIcon href={twitterHref} title='X' className='icon_style' icon={faTwitter}/>
                </div>
                <p>&copy;{title} <time>2024</time></p>
            </section>
        </footer>
    )
}

export default RavenFooter
