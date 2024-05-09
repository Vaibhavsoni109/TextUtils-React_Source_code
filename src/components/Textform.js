import React from 'react'
import { useState } from "react"

export default function Textform(props) {
    const handleUpClick = () => {
        let newText = text.toLocaleUpperCase();
        console.log("uppercase was clicked");
        setText(newText)
        props.showAlert(" Success", "UpperCase has been clicked");


    }
    const handleLowClick = () => {
        let newText = text.toLocaleLowerCase();
        console.log("LowerCase was clicked");
        setText(newText)
        props.showAlert(" Success", "LowerCase has been clicked");
    }
    const clearText = () => {
        let newText = "";
        console.log("clear text");
        props.showAlert(" Success", "ClearText has been clicked");
        setText(newText)
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleOnChange = (event) => {
        // console.log("uppercase was clicked");
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className='container' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#272D27', color: props.mode === 'light' ? 'black' : 'white' }} value={text} onChange={handleOnChange} id="myBox" rows="8" placeholder='Enter text here'></textarea>
                </div>
                <button disabled={text.length===0}  className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Covert to upper case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Covert to Lower case</button>
                <button disabled={text.length===0} className="btn btn-success mx-2 my-2" onClick={clearText}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>

            </div>
            <div className='container my-3' style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Your Text Summary</h2>
                 <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minute read </p>
                <h2>Preview</h2>
                <p>{text}</p>

            </div>
        </>
    )
}
