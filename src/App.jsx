import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {

  const[screenText, setScreenText] = useState("0");

  const OnNumberClick = (e) => {
    setScreenText(screenText === '0' ? e : prev => prev.toString() + e)
  }

  const rows = [];
  for (let i = 9; i >= 0; i--) {
      rows.push(<Button number={i} key={i} clickEvent={OnNumberClick} />);
  }

  return (
    <div className="App">
      <div className="calculatrice">
        <div className="screen">
          {screenText}
        </div>

        <div className="btns">
          <div className="numbers">
            {rows}
          </div>

          <div className="functions">
            <button>x</button>
            <button>+</button>
            <button>-</button>
            <button>=</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
