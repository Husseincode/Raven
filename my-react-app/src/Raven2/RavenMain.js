import React, { useState } from 'react'
import './RavenMain.css'
import { data } from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const RavenMain = ({title}) => {
    const [value, setValue] = useState('');
    
    const searchValue = () => {
        const newSearch = data.filter();
    };
    const selectOption = (e) => {
        setValue(e.target.value);
    }
    return (
        <main className='mainPage'>
            <section>
                <form action='' method='POST'>
                    <label htmlFor='search'>
                        <input placeholder='Search...' type='text'/>
                        <FontAwesomeIcon onClick={()=>{searchValue(value)}} type='button' className='btn btn-primary text-white' icon={faSearch}/>
                    </label>
                    <span>Filter: </span>
                    <select className='text-black' onChange={selectOption} value={value}>
                        <option value=''>Select an option</option>
                        <option value='Calculator'>Calculator</option>
                        <option value='Arithmetic progression'>Arithmetic progression</option>
                        <option value='Geometric Progression'>Geometric progression</option>
                    </select>
                </form>
                <div className='cards'>
                    {
                        data.map(item => {
                            const {name, img, notes,  id} = item;
                            return (
                                <div key={id} title={name} className='card shadow text-secondary'>
                                    <div className='card-header text-center'>{name}</div>
                                    <div className='card-body'>
                                        <div style={{backgroundImage: `url(${img})`}} className='card-img'></div>
                                        <div className='card-text text-center p-3'>{notes}</div>
                                    </div>
                                    <div className='card-footer'>
                                        <Link type='button' className='btn btn-sm btn-primary'>Check</Link>
                                        <div>{title}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </main>
    )
}

export default RavenMain