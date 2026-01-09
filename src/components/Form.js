import React, {useState} from 'react'

export default function Form(props) {
    const [text, setText] = useState('');
    const handleupClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleloClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleclearClick = () => {
        let newText = '';
        setText(newText);
    }
    const handleCopy = () => {
        let text = document.getElementById('text');
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '))
    }
    const handleOnChange = (e) => {
        setText(e.target.value)
    }
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h3>{props.heading}</h3>
            <div className="mb-3">
            <textarea
                className="form-control"
                value={text}
                onChange={handleOnChange}
                style={{
                    backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
                    color: props.mode === 'dark' ? 'white' : '#042743'
                }}
                id="text"
                rows="8"
            />
            </div>
            <button className="btn btn-primary mx-2" onClick={handleupClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleloClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h3>Your text summary</h3>
            <p>{text.split(' ').length} words and {text.length} characters</p>
            <p>{0.008 * text.split(' ').length} Minutes read</p>
            <h3>Preview</h3>
            <pre>{text.length>0?text:'Enter something in above textbox to see preview here.'}</pre>
        </div>
        </>
    )
}
