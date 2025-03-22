import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/Navbar'
import First from './components/First'
// import About from './components/About'
import Alert from './components/Alert';
// import CircularPalette from './components/CircularPalette';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => { 
    setAlert({
      msg : message,
      type: type
  })
  setTimeout(()=>{
    setAlert(null);
  },2000)
  }
  //#232626 ,#410445,56021F,034C53

  const toggleMode = () => {
  if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode inabled", "success");
      document.title = "Textutils dark Mode";
  } else {
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode inabled", "success");
    document.title = "Textutils light Mode";
  }
};

const bgColor = (color) => {
      document.body.style.backgroundColor = color;
      document.body.style.color = 'white';
}


  return (
    <>
     {/* <Router> */}
     
     < Navbar title="TextMaster" mode={mode} toggleMode={toggleMode} bgColor={bgColor}/>
     <Alert alert={alert} />
      {/* <Routes>
        <Route path="/" element={ < First mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>} />
        <Route path="/about" element={<About mode={mode} toggleMode={toggleMode}/> } />
      </Routes>
    </Router> */}
    < First mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
     
    </>
  )
}

export default App ;
