import { useEffect, useState } from "react";
import './sample.css'

const url = 'https://api.github.com/users' /**Array of objects [details] */
/**use effecy can not bring promise */

let GithubUsers = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(()=>{

        fetch(url)
        .then(response => {
            if (response.status >= 200 && response.status <= 299)
            {
                return response.json()
            }
            else
            {
                setIsLoading(false)
                setIsError(true)
                throw new Error (response.statusText)
            }
        })
        .then(user => {
            setUsers(user)
            setIsLoading(false);
        })
        .catch(error => console.log(error))

    }, []) /**Array was set to render it just once to avoid re-rendering, bringing about infinite loop */

    if (isLoading)
    {
        return (
        <>
        <div>
            <h3>Loading...</h3>
        </div>
        </>
        )
    }

    if (isError)
    {
        return (
            <>
            <div>
                <h3>Error...</h3>
            </div>
            </>
        )
    }

    return (
        <>
        <h3>Github Users</h3>
        <ul>
        {
            users.map(user => {
                const {id, login, avatar_url, html_url} = user
                return (
                    <li key={id}>
                        <img src={avatar_url} alt={login}/>
                        <div>
                            <h4>login</h4>
                            <a href={html_url}>Profile</a>
                        </div>
                    </li>
                )
            })
        }
        </ul>
        </>
    )
}
export default GithubUsers