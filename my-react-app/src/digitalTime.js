import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

let timeDiv = {
    marginTop: "10px"
}
class Time extends React.Component {
    constructor (props)
    {
        super(props);
        this.updateTime()
        this.state = {
            hours: 0,
            minutes: 0,
            seconds: 0,
        }
    }
    
    updateTime = () => {
        setInterval(() => {
            this.setState({
            hours: new Date().getHours(),
            minutes: new Date().getMinutes(),
            seconds: new Date().getSeconds(),
            })
        }, 1000);
    }

    render()
    {
        return (
            <React.StrictMode>
                <div style={timeDiv} className="text-center text-success">Time</div>
                <div className=" text-center text-white">
                    <span>{((this.state.hours) <= 9 ? `0${this.state.hours}` : this.state.hours)}</span>:
                    <span>{((this.state.minutes) <= 9 ? `0${this.state.minutes}` : this.state.minutes)}</span>:
                    <span>{(this.state.seconds <= 9 ? `0${this.state.seconds}` : this.state.seconds)}</span>&nbsp;
                    <span>{(this.state.hours >= 12 && this.state.hours <= 23) ? "Pm" : "Am"}</span>
                </div>
            </React.StrictMode>
        )
    }
}

export default Time;