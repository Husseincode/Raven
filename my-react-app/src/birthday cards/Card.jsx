import React from "react";
import Link from "./getdata";
import { data } from "./dataArray";

let div_attributes = {
    display: "grid",
    marginTop: "10px"
}

class Card extends React.Component
{
    constructor (props)
    {
        super(props);
        this.state = {
            aval_data: <Link/>,
            heading: `${data.length} birthdays today`,
            btnFooter: 'Clear All'
        }
    }
    ClearAll = () =>{
        this.setState({
            aval_data: "",
            
        })

        let footer_btn = document.querySelector("button").innerHTML;
        if (footer_btn == 'Clear All')
        {
            this.setState({
                aval_data: '',
                btnFooter: 'Undo',
                heading: "None today",
            })
        }
        else
        {
            this.setState({
                aval_data: <Link />,
                btnFooter: 'Clear All',
                heading: `${data.length} birthdays today`,

            })
        }
    }
    render ()
    {
        return (
            <div className="card shadow-lg">
                <h3>{this.state.heading}</h3>
                <div style={div_attributes}>
                    {this.state.aval_data}
                </div>
                <button onClick={this.ClearAll} style={{margin: "10px 0px"}} type="button" className="btn btn-pink text-white">{this.state.btnFooter}</button>
            </div>
        )
    }
}

export default Card