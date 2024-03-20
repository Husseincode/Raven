/**
 * do the loading bar first
 */
import React, { useEffect, useState, useRef } from 'react'
import './form.css'

const LoadingScreen = () => {
    return (
        <div>
            <p>Loading...</p>
        </div>
    )
}

const Controlling_Inputs = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [person, setPerson] = useState({name: '', age: '', email: ''});
    const [user, setUser] = useState([]);

    const handleData = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setPerson({...person, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (person.name && person.age && person.email)
        {
            let newUser = {id: new Date().getTime().toString(), name: person.name, age: person.age, email: person.email};
            setUser((oldUser)=>{
                return [...oldUser, newUser];
            })
        }
        setPerson(
            {
                name: '',
                age: '',
                email: ''
            }
        )
        console.log(user)
    }

    useEffect(()=>{
        window.addEventListener('load', ()=>{
            setIsLoading(false);
        })
    }, [])

    if (isLoading)
    {
        <LoadingScreen/>
    }

    else
    {
        return (
            <React.Fragment>
                <article className='shadow-lg'>
                    <form className='' onSubmit={handleSubmit}>
                        <div>
                            <label className='text-white'>Name: </label>
                            <input 
                            value={person.name} 
                            type='text' 
                            name='name'
                            onChange={handleData}/>
                        </div>
                        <div>
                            <label className='text-white'>Age: </label>
                            <input 
                            value={person.age} 
                            type='number' 
                            name='age'
                            onChange={handleData}/>
                        </div>
                        <div>
                            <label className='text-white'>Email: </label>
                            <input 
                            value={person.email} 
                            type='email' 
                            name='email'
                            onChange={handleData}/>
                        </div>
                        <button onClick={handleSubmit} className='btn btn-primary text-center'>Submit</button>
                    </form>
                </article>
                {
                    user.map(item => {
                        const {id, name, age, email} = item;
                        return (
                            <React.Fragment>
                                <div className='text-white' style={{display: 'flex', justifyContent: 'space-evenly', marginTop: '100px'}} key={id}>
                                    <h4>{name}</h4>
                                    <p>{age}</p>
                                    <p>{email}</p>
                                </div>
                            </React.Fragment>
                        )
                    })
                }
            </React.Fragment>
        )
    }
}

const UseRefBasics = () => {
    const refContainer = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(refContainer.current.value);
    }

    /**
     * don't need to add a dependency array [], since
     * it does not re-render
     */
    useEffect(()=> {
        console.log(refContainer.current)
        refContainer.current.focus()
    })

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type='text' ref={refContainer}/>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </div>
        </form>
    )
}

const Combination = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [person, setPerson] = useState({
        name: '',
        age: ''
    })
    const [data, setData] = useState([]);

    const handleData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson(prevValue => ({...prevValue, [name]: value}))
    };

    const submitData = () => {
        if (person.name && person.age)
        {
            setData([...data, person]);
            setPerson({
                name: '',
                age: '',
            })
        }
    };

    useEffect(()=>{
        window.addEventListener('load', ()=>{
            setIsLoading(false);
        })
    }, []);

    if (isLoading)
    {
        <LoadingScreen/>
    }

    else{
        return (
            <React.Fragment>
                <article>
                    <form onSubmit={submitData}>
                        <div>
                            <label htmlFor='name'>Name: </label>
                            <input 
                            value={person.name}
                            name='name'
                            id='name'
                            onChange={handleData}
                            type='text'
                             />
                        </div>
                        <div>
                            <label htmlFor='age'>Age: </label>
                            <input 
                            value={person.age}
                            name='age'
                            id='age'
                            type='text'
                            onChange={handleData}
                             />
                        </div>
                        <button onClick={submitData} type='button' className='btn btn-primary'>Submit</button>
                    </form>
                </article>
                {/* {
                    data.map(item => {
                        console.log(item);
                    })
                } */}
            </React.Fragment>
        )
    }
}

export {Controlling_Inputs, UseRefBasics, Combination}