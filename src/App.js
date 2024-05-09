
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import { useState } from 'react';
// import { BrowserRouter , Route, Routes } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 3000);
  }
  const toggleMode = () => {
    if (mode === 'light') {

      setMode('dark');
      document.body.style.backgroundColor = "#272D27";
      showAlert(" Success", "Dark mode has been enabled")
      document.title = "TextUtils-DarkMode"
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert(" Success", "Light mode has been enabled")
      document.title = "TextUtils-LightMode"
    }
  }

  return (
    <>


      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      
      {/* <Routes>
        <Route path="/" element={ <Textform heading="Enter your text for analyze" showAlert={showAlert} alert={alert} />}/> 
          <Route path="/about" element={<About/>} />
      </Routes> */}
    <Textform heading="TextUtils- Word Counter, Character Counter, Remove Extra Spaces" mode={mode} showAlert={showAlert} alert={alert} />



     

    </>
  );
}

export default App;
