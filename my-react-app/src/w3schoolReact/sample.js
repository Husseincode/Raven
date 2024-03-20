import React, { useEffect, useState } from "react";
import './sample.css';
import { books, object } from "./data_sample";
import img from '../images/loading_3305803.png';
import './sample.css'

let Time = (props) => {
    let {hrs, mins, secs} = props
    let clock_container = {
        width: 200,
        height: 200,
        borderRadius: '50%',
        border: "1px solid white",
    }
    
    let hrs_clock = {
        position: 'relative',
        top: 100,
        left: 100,
        border: '1px solid dodgerblue',
        width: '25%',
        height: 3,
        transform: 'rotate(' + ((hrs/12)*360 - 90 ).toString() + 'deg)',
        transformOrigin: '0% 0%',
        backgroundColor: 'red',
        zIndex: 1,
    }
    
    let mins_clock = {
        position: 'relative',
        top: 100,
        left: 100,
        border: '1px solid grey',
        width: '35%',
        height: 2,
        transform: 'rotate(' + ((mins/60)*360 - 90 ).toString() + 'deg)',
        transformOrigin: '0% 0%',
        backgroundColor: 'red',
        zIndex: 1,
    }
    
    let secs_clock = {
        position: 'relative',
        top: 100,
        left: 100,
        border: '1px solid red',
        width: '40%',
        height: 1,
        transform: 'rotate(' + ((secs/60)*360 - 90 ).toString() + 'deg)',
        transformOrigin: '0% 0%',
        backgroundColor: 'red',
        zIndex: 1,
    }

    return (
        <React.Fragment>
            <div style={clock_container}>
                <div style={hrs_clock}/>
                <div style={mins_clock}/>
                <div style={secs_clock}/>
            </div>
        </React.Fragment>
    )
}

let Testing = () => {
    let [data, setData] = useState(object);

    let RemoveObj = (id) => {
        let newPeople = data.filter(item => item.id !== id);
        setData(newPeople)
    }

    return (
        <React.Fragment>
            {
                data.map(item => {
                    const {id, frameWorkName, title} = item;
                    return (
                        <>
                        <div key={id} title={title} style={{display: 'flex', justifyContent: 'space-between'}}>
                            <h1>{frameWorkName}</h1>
                            <button className="btn btn-primary" type="button" onClick={() => {RemoveObj(id)}}>remove</button>
                        </div>
                        </>
                    )
                })
            }
        </React.Fragment>
    )
}

let BookCards = (props) => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const handlePage = () => {
            setIsLoaded(true);
        }

        window.addEventListener('beforeunload', handlePage)
    }, [])

    if (isLoaded)
    {
        return (
            <>
            <div key={1}>
                <img style={{width: "3cm", height: "3cm"}} src={img} alt="loading"/>
            </div>
            </>
        )
    }

    else
    {
        return (
            <>
            {
                books.map(item => {
                    const {id, bookName, author} = item;
                    return (
                        
                        <div key={id} className="card shadow bg-transparent text-white">
                            <div className="card-header">{bookName}</div>
                            <div className="card-body">{author} <i className="fa fa-star text-warning"></i></div>
                        </div>
                        
                    )
                })
            }
            </>
        )
    }
}

class AnalogTime extends React.Component
{
    constructor (props)
    {
        super(props);
        this.state = {
            hrs: new Date().getHours(),
            mins: new Date().getMinutes(),
            secs: new Date().getSeconds()
        }
        this.updateTime()
    }

    updateTime()
    {
    setInterval(() => {
        this.setState({
            hrs: new Date().getHours(),
            mins: new Date().getMinutes(),
            secs: new Date().getSeconds()
        })
    }, 1000);
    }

    render () {
        return (
        <>
        <Time hrs={this.state.hrs} mins={this.state.mins} secs={this.state.secs} />
        </>
        )
    }
}

class Header extends React.Component {
    constructor (props)
    {
        super(props);
        this.state = {
            favoriteColor: 'red'
        }
    }

    // static getDerivedStateFromProps (props, state)
    // {
    //     return {favoriteColor: props.favcol}
    // }

    // shouldComponentUpdate ()
    // {
    //     return false;
    // }

    // changeColor = () => {
    //     this.setState({
    //         favoriteColor: 'blue'
    //     })
    // }

    componentDidMount ()
    {
        setTimeout(() => {
            this.setState({
                favoriteColor: 'blue'
            })
        }, 1000);
    }

    // getSnapshotBeforeUpdate(prevProps, prevState)
    // {
    //     console.warn(prevState.favoriteColor)
    // }

    componentDidUpdate()
    {
        console.log(this.state.favoriteColor)
    }

    render ()
    {
        return (
            <>
            <p>My favoriteColor is {this.state.favoriteColor}</p>
            <button onClick={this.changeColor} type="button" className="btn btn-sm btn-primary">Change color</button>
            </>
        )
    }
}

let MyForm = () => {
    const [inputs, setInputs] = useState('');

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name] : value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs)
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input
                type="text"
                name="username"
                value={inputs.username || ''}
                onChange={handleChange}
                />
            </label>
            <label>Enter your age:
                <input
                type="number"
                name="age"
                value={inputs.age || ''}
                onChange={handleChange}
                />
            </label>
            <input className="btn btn-primary" type="submit"/>
        </form>
        </>
    )
}

class HelloWorld extends React.Component {
    render ()
    {
        return (
            <>
            <div>
                <h1 {...this.props}>Hello World!</h1>
                {console.warn(Object.isFrozen(this.props))}
            </div>
            </>
        )
    }
}

/**
 * working with properties
 */

let Properties = (props) => {
    console.log(props)
    console.warn(Object.isFrozen(props))
}
export {Testing, BookCards, AnalogTime, Header, MyForm, HelloWorld, Properties}