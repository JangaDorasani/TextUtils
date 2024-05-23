
import './App.css';

import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, {useState} from 'react'

// import DarkMode from './Components/DarkMode';


function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const toggleMode=()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      document.body.style.color='white';
      showAlert("Enable darkmode","success"); 
      document.title="TextUtils-DarkMode";
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("Enable lightmode","success");
      document.title="TextUtils-LightMode";
    }
  }
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    
     <TextForm showAlert={showAlert} mode={mode}/>
  
    {/* <DarkMode/> */}
    </>
  );
}

export default App;
