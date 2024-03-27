import React, { useEffect, useState } from 'react'
import RavenHeader from './RavenHeader'
import RavenFooter from './RavenFooter'
import { details } from './details'
import './grp_stat.scss'
import { data } from './data'
import { Link } from 'react-router-dom'
import LoadingScreen from './LoadingScreen'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion, faRefresh, faUpload } from '@fortawesome/free-solid-svg-icons'

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

    const getNumber = () => {
        let num = window.prompt('Enter length of the number...');
        let getParent = document.querySelector('.encap_boundary');
        let i = 0;

        while (i < num)
        {
            getParent.append(CreateBoundary());
            i++;
        }
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
                <h1>Grouped data </h1>
                <p>Lorem ipsum dit amet orem ipsum dit amet orem ipsum dit amet orem ipsum dit amet
                orem ipsum dit amet orem ipsum dit amet
                orem ipsum dit amet orem ipsum dit amet orem ipsum dit ame orem ipsum dit amet
                </p>
            </section>
            <section className='grp_stat'>
                <form method='POST' className='shadow'>
                    <div className='inputs'>
                        <div>
                            <button onClick={getNumber} type='button' className='btn btn-sm btn-secondary'>
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
                            <CreateBoundary/>
                        </div>
                    </div>
                    {/* <div className='result'></div> */}
                </form>
            </section>
            <section className='recommendation'>
                <h3 className='text-secondary'>Others</h3>
                <div>
                    {data.map(item => {
                        const {name, href } = item;
                        return (
                            <Link to={href} type='button' className='btn btn-sm btn-secondary others'>{name}</Link>
                        )
                    })}
                </div>
            </section>
        </main>
    }
    <RavenFooter {...details}/>
    </>
}

export default GrpStat;