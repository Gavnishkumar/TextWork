import modelogo from './images/mode.png'
import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Text';
import React,{useState} from 'react';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Link,
//   Routes,
//   Route
// } from "react-router-dom";
function App() {
  const [mode,setMode]=useState('invert(0)');
  const [alert,setAlert] =useState(null);
const showalert=(message,type)=>{
  setAlert({
        msg: message,
        type: type
  })
  setTimeout(() => {
    setAlert(null);
  }, 3000);
}

  const handleMode=()=>{
    if(mode==='invert(0)'){
      setMode('invert(250)');
      document.body.style.backgroundColor='#11121e';
      document.body.style.color='white';
      showalert("darkMode is enabled ","success");
    }
    else{
      setMode('invert(0)');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showalert("LightMode is enabled ","success");
    }
  }
  // setTimeout( function() { showalert(null); }, 5000);

  return (
    <>
    {/* <Router> */}
      <Navbar title="TextWork" about="About"/>
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <Routes>
          
} />
        <Route path='/about' element={<About/>}/>
      </Routes> */}
      <Text heading="Enter your text" handleMode={mode} showalert={showalert}/>
      </div>
      <img className='mymode-img' id='my-icon' onClick={handleMode} style={{filter: mode}} src={modelogo} alt=" " />
      {/* </Router> */}
    </>
  );
}
export default App;
