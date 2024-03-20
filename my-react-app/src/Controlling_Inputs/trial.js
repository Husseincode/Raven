import React, {useState, useEffect} from "react";

const LoadingScreen = () => {
    return (
        <div className="text-white">
            <p>Loading...</p>
        </div>
    )
}
const UseReduceMethod = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpened, setIsModalOpened] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [item, setItem] = useState('');
    const [data, setData] = useState([]);

    const handleData = (e) => {
        const value = e.target.value;
        setItem(value);
    }

    const Submit = (e) => {
        e.preventDefault();
        if (item)
        {
            let entity = {
                id: new Date().getTime().toString(),
                name: item
            }

            setData(prevData => {
                return [...prevData, entity];
            })
            setIsModalOpened(false);
            setItem('');
        }

        else
        {
            setIsModalOpened(true);
            setModalContent("Please enter a valid string");
        }
        console.warn(data)
    }

    useEffect(()=>{
        window.addEventListener('load', ()=> {
            setIsLoading(false);
        })
    }, []);

    if (isLoading)
    {
        <LoadingScreen/>
    }

    else
    {
        return (<>
        <article style={{display: 'grid', justifyContent: 'center', transform: 'translate(0%, 60%)'}} key={1}>
            {isModalOpened && <div style={{color: 'red'}}>{modalContent}</div>}
            <form onSubmit={Submit}>
                <div>
                    <input
                    type='text'
                    name='string'
                    value={item}
                    onChange={handleData}
                    />
                </div>
                <button style={{display: 'flex', justifyContent: 'center'}} onClick={Submit} type='click' className='btn btn-secondary btn-sm text-white'>Add</button>
            </form>
            {
            data.map(user => {
                const {id, name} = user;
                return (
                    <>
                    <p key={id}>{name}</p>
                    </>
                )
            })
            }
        </article>
        </>)
    }
}

export default UseReduceMethod