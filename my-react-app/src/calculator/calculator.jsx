import React, {useState} from "react";
import './calculator.css';
import 'bootstrap/dist/css/bootstrap.css';

const Calculator = () => {
    const [display, setDisplay] = useState(''); /**React Hook */

    const HandleButtonClick = (value) => {
        setDisplay(prevDisplay => prevDisplay + value)
    }
    const HandleCalculate = () => {
        try {
            // eslint-disable-next-line no-eval
            setDisplay(eval(display).toString())
        }
        catch (error)
        {
            console.log('Error computing value')
        }
    }

    const HandleClear = () => {
        setDisplay('')
        console.clear()
    }
    return (
        <>
            <div className="container">
                <div className="output">
                    <div className="onType"/>
                    <div className="result">{display}</div>
                </div>
                <div className="btns">
                    <button onClick={()=>{HandleButtonClick(')')}} type="button" value=")" className="btn unik">)</button>
                    <button onClick={()=>{HandleButtonClick('(')}} type="button" value="(" className="btn unik">(</button>
                    <button onClick={()=>{HandleButtonClick('/100')}} type="button" value="%" className="btn unik">%</button>
                    <button onClick={HandleClear} type="button" value="clear" className="btn btn-success">A.C</button>
                    <button onClick={()=>{HandleButtonClick('7')}} type="button" value="7" className="btn unik">7</button>
                    <button onClick={()=>{HandleButtonClick('8')}} type="button" value="8" className="btn unik">8</button>
                    <button onClick={()=>{HandleButtonClick('9')}} type="button" value="9" className="btn unik">9</button>
                    <button onClick={()=>{HandleButtonClick('/')}} type="button" value="/" className="btn btn-primary">/</button>
                    <button onClick={()=>{HandleButtonClick('4')}} type="button" value="4" className="btn unik">4</button>
                    <button onClick={()=>{HandleButtonClick('5')}} type="button" value="5" className="btn unik">5</button>
                    <button onClick={()=>{HandleButtonClick('6')}} type="button" value="6" className="btn unik">6</button>
                    <button onClick={()=>{HandleButtonClick('*')}} type="button" value="X" className="btn btn-primary">X</button>
                    <button onClick={()=>{HandleButtonClick('1')}} type="button" value="1" className="btn unik">1</button>
                    <button onClick={()=>{HandleButtonClick('2')}} type="button" value="2" className="btn unik">2</button>
                    <button onClick={()=>{HandleButtonClick('3')}} type="button" value="3" className="btn unik">3</button>
                    <button onClick={()=>{HandleButtonClick('-')}} type="button" value="-" className="btn btn-primary">-</button>
                    <button onClick={()=>{HandleButtonClick('0')}} type="button" value="0" className="btn unik">0</button>
                    <button onClick={()=>{HandleButtonClick('.')}} type="button" value="." className="btn unik">.</button>
                    <button onClick={HandleCalculate} type="button" value="=" className="btn unik">=</button>
                    <button onClick={()=>{HandleButtonClick('+')}} type="button" value="+" className="btn btn-primary">+</button>
                </div>
            </div>
        </>
    )
}

export default Calculator