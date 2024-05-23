import React,{useState}from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Convert to Uppercase","success"); 
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Convert to Lowercase","success"); 
    }
    const handleCopy=()=>{
      var text=document.getElementById("mytext");
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
      props.showAlert("Copy to Clipboard","success"); 

    }
    const handleClear=()=>{
      let x="";
      setText(x);
      props.showAlert("Cleared Text","success"); 
    }
    const handleExtraSpaces=()=>{
      let y=text.split(/[ ]+/);
      setText(y.join(" "));
      props.showAlert("Extra Spaces Removed","success"); 
      
    }
    const [fontFamily, setFontFamily] = useState('Arial');
    
      const handleFontChange = (newFontFamily) => {
        setFontFamily(newFontFamily);
        props.showAlert(newFontFamily,"success"); 
      };
      const [fontSize, setFontSize] = useState('16px');
    
      const handleSizeChange = (newFontSize) => {
        setFontSize(newFontSize);
        props.showAlert(newFontSize,"success"); 
      };
  
    const handleChange=(event)=>{
        setText(event.target.value) 
    }
    let [text,setText]=useState("");
  return (
    <div className="container mt-4" style={{color:props.mode==='dark'?'white':'black'}}>
   <h1 className="font-bold text-3xl my-4">Try TextUtils-word counter,Character counter,Remove Extra Spaces</h1>
      <form className="mb-3">
        <textarea className="form-control" rows="8" id="mytext" value={text} onChange={handleChange} style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'black',fontFamily,fontSize}}></textarea>
      </form>
      <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpClick}>convert to Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>convert to Lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2"  onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>remove ExtraSpaces</button>
      
      <div className="btn-group dropend">
      <button disabled={text.length===0} type="button" className="btn btn-primary dropdown-toggle mx-2 my-2" data-bs-toggle="dropdown" aria-expanded="false">
        Select Font
      </button>
      <ul className="dropdown-menu">
        <li><button className="dropdown-item" onClick={() => handleFontChange('Arial')}>Arial</button></li>
        <li><button className="dropdown-item" onClick={() => handleFontChange('Times New Roman')}>Times New Roman</button></li>
        <li><button className="dropdown-item" onClick={() => handleFontChange('monospace')}>monoscape</button></li>
        <li><button className="dropdown-item" onClick={() => handleFontChange('Georgia')}>Georgia</button></li>
        <li><button className="dropdown-item" onClick={() => handleFontChange('Verdana')}>Verdana</button></li>
        <li><button className="dropdown-item" onClick={() => handleFontChange('Cursive')}>Cursive</button></li>
        <li><button className="dropdown-item" onClick={() => handleFontChange('Garamond')}>Garamond</button></li>
        <li><button className="dropdown-item" onClick={() => handleFontChange('Helvetica')}>Helvetica</button></li>
        <li><button className="dropdown-item" onClick={() => handleFontChange('Brush Script MT')}>Brush Script MT</button></li>
        <li><button className="dropdown-item" onClick={() => handleFontChange('Trebuchet Ms')}>Trebuchet Ms</button></li>
        <li><button className="dropdown-item" onClick={() => handleFontChange('Calibri')}>Helvetica</button></li>
        <li><button className="dropdown-item" onClick={() => handleFontChange('Lucida Bright')}>Lucida Bright</button></li>
        <li><button className="dropdown-item" onClick={() => handleFontChange('Cambria')}>Cambria</button></li>
        <li><button className="dropdown-item" onClick={() => handleFontChange('Candara')}>Candara</button></li>
        <li><button className="dropdown-item" onClick={() => handleFontChange('Copperplate')}>Copperplate</button></li>


      </ul>
    </div>
    <div className="btn-group dropend">
      <button disabled={text.length === 0} type="button" className="btn btn-primary dropdown-toggle mx-2 my-2" data-bs-toggle="dropdown" aria-expanded="false">
        Select Font Size
      </button>
      <ul className="dropdown-menu">
        <li><button className="dropdown-item" onClick={() => handleSizeChange('12px')}>Small</button></li>
        <li><button className="dropdown-item" onClick={() => handleSizeChange('16px')}>Normal</button></li>
        <li><button className="dropdown-item" onClick={() => handleSizeChange('20px')}>Large</button></li>
        <li><button className="dropdown-item" onClick={() => handleSizeChange('24px')}>Extra Large</button></li>
      </ul>
    </div>

      <div className="conatiner my-4" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1 className="font-bold text-2xl">Your text Summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length !==0}).length} words and {text.length} characters </p>
        <p>{0.008 * (text.split(" ").filter((element)=>{return element.length !==0}).length)} minutes to read</p>
        <h1 className="font-bold text-xl mt-4">Preview</h1>
        <p style={{fontFamily,fontSize}}>{text.length>0?text:"Nothing to Preview"}</p>
      </div>
     
    </div>
  )
    }