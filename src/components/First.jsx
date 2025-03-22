import React, { useState } from 'react'
import About from './About'
export default function First(props) {
    const [text, setText] = useState("hiii");
    const [isBold, setIsBold] = useState(false);
    const [isUnderLine, setIsUnderLine] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [isCapitalize, setIsCapitalize] = useState(false);

  

    let handleOnChange = (event) => {
        let newtext = event.target.value;
        setText(newtext)
    }

    let handleUpClick = () => { 
        let uperCasetext = text.toUpperCase();
        setText(uperCasetext);
        props.showAlert("Changed into uppercase", "success");
    }
    let handleCapitalClick = () => {
      //because there in no method like tocapitalize so that we use atyle property 

      setIsCapitalize((prev) => !prev);
      props.showAlert("Capitalized the text", "success");
    }
    
    let handleLoClick = () => { 
      let lowerCaseText = text.toLowerCase();
      setText(lowerCaseText);
      props.showAlert("Changed into lowercase", "success");
    }

    let handleClearClick = () => {
        setText("");
        props.showAlert("Clear all the text", "success");
    }
//ek bar click karenge to true ho jayege property apply ho jayegi or again click karenge to false ho jayega styling remove ho jayegi 
    let handleBold = () => {
           setIsBold((prev) => !prev);
    }
    let handleUnderLine = () => {
        setIsUnderLine((prev) => !prev);
    }

    const handleItalic = () => {
        setIsItalic((prev) => !prev);
    }

    const handleRemoveExtraSpace = () => {
       let newText = text.split(/[ ]+/);
       setText(newText.join(" "));
       props.showAlert("Remove all the extra space", "success");
    }

    const handleCopy = () => {
        let textBox = document.getElementById("textBox");
        textBox.select();
        navigator.clipboard.writeText(textBox.value);
        props.showAlert("Copied to cliebord", "success");
    }

    let style = {
        fontWeight: (isBold) ? "bold" : "normal",
        textDecoration: (isUnderLine)? "underline" : "none",
        fontStyle: (isItalic)? "italic" : "normal", 
        textTransform: isCapitalize ? "capitalize" : "none"
    }
    // console.log(style);
   

  return (
    <>
    <div className={`mt-3 container  text-${props.mode === 'dark'?'white':'black'}`}>
      <h4>Fun with textMaster</h4>
      <form >
            <div className="form-group my-3">
                <textarea className="form-control" id="textBox" rows="10" placeholder='Enter You text' value={text} onChange={handleOnChange} style={style}></textarea>
            </div>
            <button className='btn btn-primary m-1' onClick={handleUpClick} type='button'>Uppercase</button>
            <button className='btn btn-primary m-1' onClick={handleLoClick} type='button'>Lowercase</button>
            <button className='btn btn-primary m-1' onClick={handleCapitalClick } type='button'>Capitalize</button>
            
            <button className='btn btn-primary m-1' onClick={handleClearClick} type='button'>Clear</button>
            <button className='btn btn-primary mx-1' onClick={handleBold} type='button'>Bold</button>
            <button className='btn btn-primary m-1' onClick={handleUnderLine} type='button'>Underline</button>
            <button className='btn btn-primary m-1' onClick={handleItalic} type='button'>Italic</button>
            <button className='btn btn-primary m-1' onClick={handleRemoveExtraSpace} type='button'>Remove extra space</button>
            <button className='btn btn-primary m-1' onClick={handleCopy} type='button'>Copy Text</button>

            
        </form>
        </div>
    <div className={`container my-3  text-${props.mode === 'dark'?'white':'black'}`}>
        <h5>Your text summary</h5>
        <span> <b>{text.split(" ").filter((ele) => {return ele.length != 0}).length} </b> Words and <b>{text.length} </b>Characters </span>
        <p>It will take <b>{ 0.08 * (text.split(" ").length-1)}</b> minuts to be read </p>

        <h5>Review your text</h5>
        <p className={`border border-${props.mode === 'dark'?'white':'black'} rounded p-3 my-3`}>{text}</p>
    </div>
<About mode = {props.mode}/>
</>
  )
}
