import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText]=useState("");
    const handleUpClick =() =>
    {
        let newtext =text.toUpperCase();
        setText(newtext);
        props.ShowAlert("Converted to UpperCase!","success");
    }
    const handleLoClick =() =>
    {
        let newtext =text.toLowerCase();
        setText(newtext);
        props.ShowAlert("Converted to LowerCase!","success");
    }
    const handleOnChange =(event) =>
    {
        setText(event.target.value);
    }
     const handleClearClick =(event) =>
    {
        let newText = " ";
        setText(newText);
        props.ShowAlert("Text Cleared!","success");

    }
    const handleCopy =() =>{
      navigator.clipboard.writeText(text);
      props.ShowAlert("Text copied","success");
    }

    const handleExtraSpace =() =>{
      let newText =text.split(/[ ]+/);
      setText(newText.join(" "));
      props.ShowAlert("Extra spaces are removed","success");
    }
   
  return (
    <>
  <div style={{color:props.mode==='light'?'#241d3e':'white'}}>
    <h1 style={{paddingLeft:"5%"}}>{props.heading} </h1>
    <div className="container">
    <label for="myBox" className="form-label"></label>
    <textarea className="form-control" id="myBox" value={text} style={{backgroundColor:props.mode==='light'?'white':'#13466e',color:props.mode==='light'?'#241d3e':'white' }}onChange={handleOnChange} rows="10"></textarea>
    </div>
    <button disabled={text.length ===0} className="button mx-2 my-2" onClick={handleUpClick}>ConvertToUpperCase</button>
    <button disabled={text.length ===0} className="button mx-2 my-2" onClick={handleLoClick}>ConvertToLowerCase</button>
    <button disabled={text.length ===0} className="button mx-2 my-2" onClick={handleClearClick}>ClearText</button>
    <button disabled={text.length ===0} className="button mx-2 my-2" onClick={handleCopy}>CopyText</button>
    <button disabled={text.length ===0} className="button mx-2 my-2" onClick={handleExtraSpace}>RemoveExtraSpace</button>
    </div>
    <div className="container my-2"  style={{color:props.mode==='light'?'#241d3e':'white'}}>
      <h2>Your Text Summary has</h2>
      <p>Total of <b> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} </b> words and <b>{text.length}</b> characters</p>
      <p><b>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}</b> Minutes to read </p>
      <h3>Preview</h3>
      <p>{text.length>0? text:"Enter Something to preview it here"}</p>
    </div>
    </>
  )
}
