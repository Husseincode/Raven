import React, { useState, useContext } from "react"
import data from "./data"
import './propdrilling.css'
import PropTypes from 'prop-types'


//more components
//fix - context api, redux (for more complex cases)

const PersonContext = React.createContext();
// gives out two components which are - (Provider, Consumer)


const ContextAPI = () => {
    const [people, setPeople] = useState(data);
    const removePerson = (id) => {
        setPeople((people) => {
            return people.filter(person => person.id !== id)
        })
    }
    return (
        <>
        <PersonContext.Provider value={{people, removePerson}} className="body">
            <h1 className="text-center">Prop drilling</h1>
            <List />
        </PersonContext.Provider>
        </>
    )
}

const List = () => {
    const {people, removePerson} = useContext(PersonContext);
    return (
        <>
        {people.map(person => {
            return (<>
            <SinglePerson removePerson={removePerson} {...person} key={person.id}/>
            </>)
        })}
        </>
    )
}

const SinglePerson = ({id, name, removePerson}) => {
    const data = useContext(PersonContext);
    console.log(data)
    return (
        <>
        <div className="item">
            <p className="text-center">{name}</p>
            <button className="btn btn-sm btn-primary" onClick={()=>{removePerson(id)}}>remove</button>
        </div>
        </>
    )
}
export default ContextAPI