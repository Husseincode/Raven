import React, { useEffect, useState } from 'react'
import './RavenMain.css'
import { data } from '../Data/data';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const RavenMain = ({title}) => {
    const [value, setValue] = useState('');
    const [str, setStr] = useState('');
    const [cards, setCards] = useState(data);
    const [condition, setCondition] = useState(false);

    const handleInputChange = (e) => {
        setStr(e.target.value);
    };
    const searchValue = (e) => {
        const newSearch = data.filter(item => {
            String.prototype.normalize()
            return (item.name.normalize().includes(str));
        });
        if (str === ''){
            setCards(data);
            setCondition(false);
        }
        else{
            if (newSearch.length === 0)
            {
                setCondition(true);
            }
            else{
                setCondition(false);
            }
            setCards(newSearch);
        }
    };
    const selectOption = (e) => {
        setValue(e.target.value);
        let selectedCard = data.filter(item => {
            return (item.genre === e.target.value)
        })
        if(e.target.value === 'All calculator')
        {
            setCards(data);
        }
        else{
            setCards(selectedCard);
        }
    }
    const cardEffect = (e) => {
        let all_cards = document.querySelectorAll('.card');
        all_cards.forEach(card => {
            card.addEventListener('mouseover', ()=>{
                card.setAttribute('class', 'card shadow-lg text-secondary');
            });
            card.addEventListener('mouseout', ()=>{
                card.setAttribute('class', 'card shadow-sm text-secondary');
            })
        })
    };
    useEffect(()=>{
        cardEffect();
    })
    return (
        <main className='mainPage'>
            <section>
                <form action='' method='POST'>
                    <label className='search' htmlFor='search'>
                        <input onKeyUp={searchValue} onChange={handleInputChange} value={str} placeholder='Search...' type='text'/>
                        {/* <FontAwesomeIcon style={{marginTop: '8px'}} onClick={()=>{searchValue(value)}} type='button' className='btn btn-dark text-white' icon={faSearch}/> */}
                    </label>
                    <span className='text-secondary'>Filter: </span>
                    <select className='text-black' onChange={(e)=>{selectOption(e)}} value={value}>
                        <option value='All calculator'>All calculator</option>
                        <option value='calculator'>Calculator</option>
                        <option value='solid shapes'>Mensuration</option>
                        <option value='sequence and series'>Sequence and series</option>
                        <option value='statistics'>statistics (grouped data)</option>
                    </select>
                </form>
                <div className='cards'>
                    {
                        cards.map(item => {
                            const {name, img, notes, id, genre, href} = item;
                            return (
                                <div onMouseOver={(e)=>{cardEffect(e)}} id={genre} key={id} title={name} className='card shadow-sm text-secondary'>
                                    <h5 className='card-header text-dark text-center'>{name}</h5>
                                    <div style={{backgroundImage: `url(${img})`}} className='card-img-top'></div>
                                    <div className='card-body'>
                                        <div className='card-text text-center p-3'>{notes}</div>
                                    </div>
                                    <div className='card-footer'>
                                        <Link to={href} type='button' className='btn btn-sm btn-dark text-white'>Check</Link>
                                        <div>{title}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {
                        condition && <div style={{margin: '30px 0px'}} className='text-secondary'>No result found!</div>
                    }
                </div>
            </section>
        </main>
    )
}

export default RavenMain