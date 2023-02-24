import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);

  const ShowAlert=(message,type)=>{
        setAlert({
          msg:message,
          type :type
        })
        setTimeout(()=>{
            setAlert(null);
        },2000);
  }
  const toggleMode =()=>
  {
    if(mode ==='light')
    {
     setMode('dark');
     document.body.style.backgroundColor ='#241d3e';
     ShowAlert("Dark mode has Enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      ShowAlert("light mode has Enabled","success");
    }
  }
  return (
    <>

    <Navbar title="Textutil" About="about textutil" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    {/* <Router>
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
              { <About />}
          </Route>
          <Route exact path="/"> */
        <TextForm ShowAlert={ShowAlert} heading ="Enter the text to analyze below" mode={mode}/>
        /*</>  </Route>   
    </Switch>
    </div>
    </Router> */}
   </>
  );
}

export default App;
