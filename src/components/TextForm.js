import React,  {useState} from "react";

export default function TextForm(props) {
const handleUpClick = ()=>{
    console.log('uppercase clicked '+ text );
    let newText = text.toUpperCase();
    setText(newText)
}

const handleOnChange =(event)=>{
console.log('on change');
setText(event.target.value)
}
   
    const [text, setText] = useState('Enter text here2');
    // text = 'new text';    wrong way to change the state
    // setText("new text");
 return (
    <div>
  <h1>{props.title}</h1>
  <div className="mb-3">
    {/* label replace aria-label  */}
    {/* for replace htmlfor */}
  <aria-label htmlfor="myBox" className="form-aria-label">Example textarea</aria-label>
  <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
</div>

<button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  );
}
