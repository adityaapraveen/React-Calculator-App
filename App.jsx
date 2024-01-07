/*global slice */
/* eslint-disable no-undef */
/* eslint-disable padded-blocks */

import { useState } from "react";

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ['/', '*', '+', '-', '.'];

  const updateCalc = (value) => {

    if (
      (ops.includes(value) && calc === '') ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc((prevCalc) => {
      const newCalc = prevCalc + String(value);

      if (!ops.includes(value)) {
        setResult(eval(newCalc).toString());
      }

      return newCalc;
    });
  };
  //   if (
  //     /* eslint-disable no-undef */
  //     ops.includes(value) && calc === '' ||
  //     ops.includes(value) && ops.includes(calc.slice(-1))
  //     // ops.includes(value) && calc.charAt(calc.length - 1) === value

  //     /* eslint-enable no-undef */
  //     ){
  //     return;
  //   }


  //   setCalc(calc + value);

  //   if(!ops.includes(value)){
  //     setResult(eval(calc + value).toString());
  //   }
  // }
    // Allow multiple consecutive digits and zeros


    //   if (ops.includes(value) && calc === '') {
  //     return;
  //   }

  //   // Allow consecutive operators only if the last character is not an operator
  //   if (ops.includes(value) && ops.includes(calc.slice(-1))) {
  //     return;
  //   }

  //   setCalc((prevCalc) => prevCalc + value);

  //   if (!ops.includes(value)) {
  //     setResult(eval(calc + value).toString());
  //   }
  // };



  const createDigits = () => {
      const digits = [];

      for (let i = 1; i < 10; i++){
        digits.push(
          <button onClick={() => updateCalc(i.toString())} key={i}>
            {i}
          </button>
        )
      }
      return digits;
  }
  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
  };

  // const calculate = () => {
  //   setCalc(eval(calc).toString());
  // }
  const calculate = () => {
    if (calc === '') {
      setCalc('0');
    } else {
      setCalc(eval(calc).toString());
    }
  }

  const deleteLast = () => {
    if (calc === ''){
      return;
    }

    const value = calc.slice(0, -1);
    setCalc(value);
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>({result})</span> : ''}&nbsp;
          {calc || "0"}
        </div>

        <div className="operators">
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>

          <button id="delete" onClick={deleteLast}>DEL</button>
        </div>

        <div className="digits">
          {createDigits()}
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>

          <button onClick={calculate}>=</button>
        </div>
      
      </div>
    <div className="switch-container">
        <label className="switch">
          <input onClick= {toggleDarkMode} type="checkbox"/>
          <span className="slider round"></span>
        </label>
    </div>
    </div>
  );
}

export default App;
