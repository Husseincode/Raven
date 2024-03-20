import React, {useState} from "react";
import { data } from "./dataArray";

let uniq_id = {
    display: "flex",
    marginTop: "10px"
}
let image_width = {
    width: "70px",
    height: "70px",
    borderRadius: "50%"
}
let Link = () => {
    const [person, setPerson] = useState(data)
    
    return (
        <>
        {
            person.map(user => {
                let {id, name, age, dp} = user
                return (
                    <div style={uniq_id} key={id}>
                        <img style={image_width} src={dp}/>
                        <span style={{display: "flex", flexDirection: "column", marginLeft: "10px"}}>
                            <span style={{fontWeight: "bold"}}>{name}</span>
                            <span>{age} Years</span>
                        </span>
                    </div>
                )
            })
        }
        </>
    )
}

export default Link;