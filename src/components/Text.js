
import React from 'react'
import { useState } from "react"

let s="";
export default function Text(props) {
    const [text,setText] = useState("");
    const changingText=(event)=>{
        setText(event.target.value);
        s=text;
    }
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("Coverted to UpperCase","success");
    }
    const handleLoClick=()=>{
        let lotext=text.toLowerCase();
        setText(lotext);
        props.showalert("Coverted to LoweCase","success");
    }
    const handleClear=()=>{
        setText("");
        props.showalert("Clear text","success");
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
       const handleCopy=()=>{
        let myValue=document.getElementById("myBox");
        myValue.select();
        navigator.clipboard.writeText(myValue.value);
        props.showalert("Copy to clipboard","success");
       }
      
  return (
    <>
        <div className=" container mb-3" style={{
            
        }}>
            <h1>{props.heading}</h1>
            
            <i className="fa-regular fa-copy" onClick={handleCopy}></i>
            <textarea className="form-control" value={text} onChange={changingText} id="myBox" rows="8"></textarea>
            {/* <label for="floatingTextarea">Comments</label> */}
            <button className="btn btn-primary my-3 mx-1" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn-primary  mx-1 " onClick={handleLoClick}>Convert to Lowercase</button>
            <button type="submit" onClick={handleClear} className="btn btn-primary mx-2 my-2">clear</button>
            <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
           
        </div>
        <div className="cotainer mx-3">
        <h2>Summary</h2>
        <p>No of characters: {text.length}</p>
        <p>No of words: {text.split(' ').length}</p>
        <p>Time to read(avg): {text.split(' ').length*0.004} minutes</p>
        <h3>preview</h3>
        <p>{text.length>0 ? text: "Enter something to preview that"}</p>
        </div>
        
    </>
   )
   
}
export {s};