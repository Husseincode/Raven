import React, { useEffect, useState } from 'react'
import RavenHeader from './RavenHeader'
import RavenFooter from './RavenFooter'
import LoadingScreen from './LoadingScreen'
import { details } from './details'
import './miniCalculator.css'

const RavenMiniCalculator = () => {
    const [loading, setIsLoading] = useState(true);
    const [value, setValue] = useState('');

    const handleButton = (e) => {
        let newValue = e.target.value;
        if (newValue === 'clear')
        {
            setValue('');
        }
        else if (newValue === '=')
        {
            setValue(prevVal => {return prevVal + newValue});
        }
        setValue(prevVal => {return prevVal + newValue});
    }
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
            <main>
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
                    <div className='calculator'>
                        <div className='header'></div>
                        <form>
                            <input disabled type='number' value={value}/>
                        </form>
                        <div className='buttons'>
                            <button onClick={handleButton} value={7} className='btn btn-dark'>7</button>
                            <button onClick={handleButton} value={8} className='btn btn-dark'>8</button>
                            <button onClick={handleButton} value={9} className='btn btn-dark'>9</button>
                            <button onClick={handleButton} value='clear' className='btn btn-danger'>A.C</button>
                            <button onClick={handleButton} value={4} className='btn btn-dark'>4</button>
                            <button onClick={handleButton} value={5} className='btn btn-dark'>5</button>
                            <button onClick={handleButton} value={6} className='btn btn-dark'>6</button>
                            <button onClick={handleButton} value='+' className='btn btn-primary'>+</button>
                            <button onClick={handleButton} value={3} className='btn btn-dark'>3</button>
                            <button onClick={handleButton} value={2} className='btn btn-dark'>2</button>
                            <button onClick={handleButton} value={1} className='btn btn-dark'>1</button>
                            <button onClick={handleButton} value='-' className='btn btn-primary'>-</button>
                            <button onClick={handleButton} value={0} className='btn btn-dark'>0</button>
                            <button onClick={handleButton} value='.' className='btn btn-dark'>.</button>
                            <button onClick={handleButton} value='/100' className='btn btn-dark'>%</button>
                            <button onClick={handleButton} value='=' className='btn btn-success'>=</button>
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