/* eslint-disable no-array-constructor */
import React, { useEffect, useState } from 'react'
import RavenHeader from '../Page_Component/RavenHeader'
import RavenFooter from '../Page_Component/RavenFooter'
import { details } from '../Data/details'
import './grp_stat.scss'
import { data } from '../Data/data'
import { Link } from 'react-router-dom'
import LoadingScreen from '../Loading_Screen/LoadingScreen'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion, faRefresh, faUpload } from '@fortawesome/free-solid-svg-icons'
import Notification from '../Message/notification'

const CreateBoundary = () =>{
    return (
        <div className='boundary'>
            <input placeholder='lower boundary' style={{flexGrow: '1'}} type='number'/>
            <input placeholder='Upper boundary' style={{flexGrow: '1'}} type='number'/>
        </div>
    )
}

const GrpStat = () => {
    const [loading, setIsLoading] = useState(true);
    const [value, setValue] = useState(0);
    const [element, setElement] = useState([]);
    const [notifyErr, setNotifyErr] = useState(false);

    const getNumber = () => {
        let num = parseInt(window.prompt('Enter length of the number...'));
        if(Number.isInteger(num)){
            setValue(num);
        }
        else{
            setNotifyErr(true);
            setTimeout(()=>{
                setNotifyErr(false)
            }, 3000)
        }
        // setValue(num);
        const newElem = new Array();
        newElem.length = value;
        // newElem.push(CreateBoundary())
        console.log(newElem, newElem.length)
        setElement(newElem);
    };
    useEffect(()=>{
        window.addEventListener('load', ()=>{
            setIsLoading(false);
        })
        setTimeout(() => {
            setIsLoading(false);
        }, 5000);
    }, []);
    if (loading)
    {
        return (<LoadingScreen/>)
    }
    return <>
    <RavenHeader {...details}/>
    {
        <main className='grp_main'>
            <section className='text-secondary'>
                <h1 style={{textDecoration: 'underline'}} className='text-dark'>Grouped data </h1>
                <p>Lorem ipsum dit amet orem ipsum dit amet orem ipsum dit amet orem ipsum dit amet
                orem ipsum dit amet orem ipsum dit amet
                orem ipsum dit amet orem ipsum dit amet orem ipsum dit ame orem ipsum dit amet
                </p>
            </section>
            <section className='grp_stat'>
                <form method='POST' className=''>
                    <div className='inputs'>
                        <div>
                            <button onClick={()=>{getNumber(value)}} type='button' className='btn btn-sm btn-secondary'>
                                Length <FontAwesomeIcon icon={faQuestion}/>
                            </button>
                            <button type='button' className='btn btn-sm btn-danger'>
                                Reset <FontAwesomeIcon icon={faRefresh}/>
                            </button>
                            <button type='button' className='btn btn-sm btn-primary'>
                                Submit <FontAwesomeIcon icon={faUpload}/>
                            </button>
                        </div>
                        <div className='encap_boundary'>
                            {
                                element.map(item => {
                                    console.log(item)
                                    return (
                                        <CreateBoundary/>
                                    )
                                })
                            }
                        </div>
                    </div>
                    {/* <div className='result'></div> */}
                </form>
            </section>
            <section className='recommendation'>
                <h3 className='text-secondary'>Others</h3>
                <div>
                    {data.map(item => {
                        const {name, href, id } = item;
                        return (
                            <Link key={id} to={href} type='button' className='btn btn-sm btn-secondary others'>{name}</Link>
                        )
                    })}
                </div>
            </section>
            {notifyErr && <Notification width='70px' color='maroon' message='Value must be number'/>}
        </main>
    }
    <RavenFooter {...details}/>
    </>
}

export default GrpStat;