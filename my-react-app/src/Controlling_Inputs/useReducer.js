import React, { useReducer, useState } from 'react'
import Modal from './modal';

/**
 * UseReduceMethod
 * when we use useReducer hook,
 * we are getting an array with two elements
 * state value and the dispatch.
 * 
 * the defaultState is the initial state
 * @returns 
 */
let form_styling = {
    display: 'grid',
    placeContent: 'center',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    left: '50%',
    top: '50%',
}
const reducer = (state, action) => {
    if (action.type === 'ITEM_ADDED')
    {
        let newItem = [...state.people, action.payload];
        return {
            ...state,
            people: newItem,
            isModalOpened: true,
            modalContent: 'item added'
        }
    }

    if (action.type === 'NO_VALUE')
    {
        return {
            ...state,
            people: state.people,
            isModalOpened: true,
            modalContent: 'No value'
        }
    }
    return state;
};
const defaultState = {
    people:[],
    isModalOpened: false,
    modalContent: ''
}
const UseReduceMethod = () => {
    const [name, setName] = useState('');
    const [state, dispatch] = useReducer(reducer, defaultState);

    const handleSubmit = (e) => {
        e.preventDefault();        
        if (name)
        {
            let item = {
                id: new Date().getTime().toString(),
                name: name,
            }
            dispatch({type: 'ITEM_ADDED', payload: item});
        }
        else
        {
            dispatch({type: 'NO_VALUE'});
        }
        console.log(state)
    }

    return (
        <>
        <form onSubmit={handleSubmit} style={form_styling}>
            {state.isModalOpened && <Modal modalContent={state.modalContent}/>}
            <input 
            type='text'
            style={{border: '1px solid dodgerblue', paddingLeft: "10px"}}
            value={name}
            onChange={(e)=>{setName(e.target.value)}} />
            <button type='submit' onChange={handleSubmit} className='btn btn-primary btn-sm'>Add</button>
        </form>
        </>
    )
}
export default UseReduceMethod