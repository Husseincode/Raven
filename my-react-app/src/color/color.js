import { useState, useEffect } from "react";
import '../w3schoolReact/sample.css'

let section_encapsule = {
    width: '400px',
    height: '500px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: "10px"
}

let outut_result = {
    width: '360px',
    margin: '20px',
    height: '100px',
    background: 'transparent',
    resize: 'none',
    textAlign: 'center',
    paddingTop: '20px',
    fontSize: '30px'
}

let change_input = {
    width: '360px',
    height: '400px',
    margin: '20px',
    display: 'grid',
    placeContent: 'center',
    gap: '10px'
}
const RGB = () => {
    const [isLoading, setIsLoading] = useState(true);
    let [redValue, setRedValue] = useState(0);
    let [blueValue, setBlueValue] = useState(0);
    let [greenValue, setGreenValue] = useState(0);

    let RedRangeSlider = (event) => {
        setRedValue(event.target.value);
        BackgroundColor()
    }

    let GreenRangeSlider = (event) => {
        setGreenValue(event.target.value);
        BackgroundColor()
    }

    let BlueRangeSlider = (event) => {
        setBlueValue(event.target.value);
        BackgroundColor()
    }

    let BackgroundColor = () => {
        let textarea = document.querySelector("textarea");
        textarea.style.background = `rgb(${redValue}, ${greenValue}, ${blueValue})`
    }

    useEffect(() => {
        window.addEventListener('load', ()=>{
            setIsLoading(false);
        })
    }, [])

    if (isLoading)
    {
        return (
            <>
            <div>
                <p>Loading...</p>
            </div>
            </>
        )
    }

    else
    {
        return (
        <>
        {/**The section encapsule */}
        <section className="shadow" style={section_encapsule}>
            {/**Output the result */}
            <textarea className="text-white" value={`rgb(${redValue}, ${greenValue}, ${blueValue})`} style={outut_result} disabled/>
            <div style={change_input}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <span className="text-center">RED</span>
                    <input onChange={RedRangeSlider} min="0" value={redValue} max="255" id="red" type="range"/>
                    <span id='red_result' className="text-center">{redValue}</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <span className="text-center">GREEN</span>
                    <input onChange={GreenRangeSlider} min="0" value={greenValue} max="255" id='green' type="range"/>
                    <span id='green_result' className="text-center">{greenValue}</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <span className="text-center">BLUE</span>
                    <input onChange={BlueRangeSlider} min="0" value={blueValue} max="255" id='blue' type="range"/>
                    <span id='blue_result' className="text-center">{blueValue}</span>
                </div>
            </div>
        </section>
        </>
    )
    }
}
export default RGB