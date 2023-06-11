import './App.css';
import Square from './Square';
import Inputers from './Inputers'
import { useState } from 'react'

function App() {

  const [colorValue, setcolorValue] = useState('')
  const [hexValue, sethexValue] = useState('')
  const [isDarkText, setisDarkText] = useState(true)

  return (
    <div className="App">
    
     <Square colorValue={colorValue}
     hexValue={hexValue}
     isDarkText={isDarkText}/>

     <Inputers 
     colorValue={colorValue}
     setcolorValue={setcolorValue}
     sethexValue={sethexValue}
     isDarkText={isDarkText}
     setisDarkText={setisDarkText}/>
    </div>
  );
}

export default App;
