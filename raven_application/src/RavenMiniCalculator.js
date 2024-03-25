/* eslint-disable no-eval */
import React, { useEffect, useState } from 'react'
import RavenHeader from './RavenHeader'
import RavenFooter from './RavenFooter'
import LoadingScreen from './LoadingScreen'
import { details } from './details'
import './miniCalculator.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackspace, faCircle, faDivide, faEquals, faMinus, faMobileAndroidAlt, faMultiply, faPlus } from '@fortawesome/free-solid-svg-icons'

const RavenMiniCalculator = () => {
    const [loading, setIsLoading] = useState(true);
    const [value, setValue] = useState('');

    const handleButton = (getValue) => {
        setValue(prevVal => prevVal + getValue);
    }
    const calculate = () => {
        try {
            setValue(eval(value).toString())   
        } catch (error) {
            console.log(error)
        }
    };
    const handleClear = () => {
        setValue('');
    };
    const popLast = () => {
        setValue(prevVal => prevVal.slice(0, -1))
    };
    useEffect(()=>{
        window.addEventListener('load', ()=>{
            setIsLoading(false);
        })
        /**if webpage fails to load */
        setTimeout(() => {
            setIsLoading(false);
        }, 5000);
        // document.body.setAttribute('class', 'bg-dark text-white');
    }, []);
    if (loading)
    {
        return(
            <LoadingScreen/>
        );
    }
    return (
        <>
        <RavenHeader title={details.title}/>
        {
            <main className='mini_main'>
                <section className='details'>
                    <h2 className='text-secondary'>{details.title} Calculator</h2>
                    <p className='text-secondary p-1'>
                        Lorem ispsum sit dit amet Lorem ispsum sit dit amet
                        Lorem ispsum sit dit amet Lorem ispsum sit dit amet Lorem ispsum sit dit amet
                        Lorem ispsum sit dit amet Lorem ispsum sit dit amet
                        Lorem ispsum sit dit amet Lorem ispsum sit dit amet
                    </p>
                </section>
                <section className='calculator_outlay text-dark'>
                    <div className='calculator shadow-lg'>
                        <div style={{display: 'flex', justifyContent: 'space-between'}} className='header'>
                            <span style={{padding: '10px'}}>
                                <FontAwesomeIcon className='text-success' icon={faCircle}/>
                                <FontAwesomeIcon style={{marginLeft: '5px'}} className='text-danger' icon={faCircle}/>
                                <FontAwesomeIcon style={{marginLeft: '5px'}} className='text-warning' icon={faCircle}/>
                            </span>
                            <span style={{fontSize: '20px', padding: '10px', fontStyle: 'italic'}}>Calculator</span>
                        </div>
                        <form>
                            <input disabled value={value}/>
                        </form>
                        <div className='buttons'>
                            <button onClick={handleClear} value='clear' className='btn fw-bolder btn-danger text-white'>C</button>
                            <button onClick={()=>{handleButton('/100')}} value='/100' className='btn btn-secondary text-white shadow'>%</button>
                            <button onClick={popLast} value='back' className='btn btn-secondary'>
                                <FontAwesomeIcon icon={faBackspace}/>
                            </button>
                            <button onClick={()=>{handleButton('/')}} value='divide' className='btn btn-secondary'>
                                <FontAwesomeIcon icon={faDivide}/>
                            </button>
                            <button onClick={()=>{handleButton('7')}} value={7} className='btn btn-dark'>7</button>
                            <button onClick={()=>{handleButton('8')}} value={8} className='btn btn-dark'>8</button>
                            <button onClick={()=>{handleButton('9')}} value={9} className='btn btn-dark'>9</button>
                            <button type='button' onClick={()=>{handleButton('*')}} value='*' className='btn btn-secondary'>
                                <FontAwesomeIcon icon={faMultiply}/>
                            </button>
                            <button onClick={()=>{handleButton('4')}} value={4} className='btn btn-dark'>4</button>
                            <button onClick={()=>{handleButton('5')}} value={5} className='btn btn-dark'>5</button>
                            <button onClick={()=>{handleButton('6')}} value={6} className='btn btn-dark'>6</button>
                            <button onClick={()=>{handleButton('-')}} value='-' className='btn btn-secondary'>
                                <FontAwesomeIcon icon={faMinus}/>
                            </button>
                            <button onClick={()=>{handleButton('1')}} value={1} className='btn btn-dark'>1</button>
                            <button onClick={()=>{handleButton('2')}} value={2} className='btn btn-dark'>2</button>
                            <button onClick={()=>{handleButton('3')}} value={3} className='btn btn-dark'>3</button>
                            <button onClick={()=>{handleButton('+')}} value='+' className='btn btn-secondary'>
                                <FontAwesomeIcon icon={faPlus}/>
                            </button>
                            <button onClick={handleClear} value='change' className='btn btn-primary'>
                                <FontAwesomeIcon icon={faMobileAndroidAlt}/>
                            </button>
                            <button onClick={()=>{handleButton('0')}} value={0} className='btn btn-dark'>0</button>
                            <button onClick={()=>{handleButton('.')}} value='.' className='btn btn-dark'>.</button>
                            <button onClick={calculate} value={0} className='btn btn-success'>
                                <FontAwesomeIcon icon={faEquals}/>
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        }
        <RavenFooter {...details}/>
        </>
    )
}

export default RavenMiniCalculator