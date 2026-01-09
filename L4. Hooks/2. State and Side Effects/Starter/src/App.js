import logo from "./logo.svg";
import "./App.css";
import {useState, useEffect} from "react"


const App = () => {

  const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
let sum = 0;
const [numQuestions,setNumQuestions] = useState(0)
const [numCorrect,setNumCorrect] = useState(0)

useEffect(() => {
  
    sum=value1+value2+value3
    
}
,[])

const checkTrue = () => {
  console.log("CHecking For True")
  console.log("Sum: ",sum)
  if (sum===proposedAnswer)
    setNumCorrect((p) => p+1)

  setNumQuestions((p) => p+1)
}

const checkFalse = () => {
  console.log("CHecking For False")
  console.log("Sum: ",sum)
  if (sum!==proposedAnswer)
    setNumCorrect((p) => p+1)
  setNumQuestions((p) => p+1)
  
}




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="game">
        <h2>Mental Math</h2>
        <div className="equation">
          <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
        </div>
        <button onClick={checkTrue}>True</button>
        <button onClick={checkFalse}>False</button>
        <p className="text">
          Your Score: {numCorrect}/{numQuestions}
        </p>
      </div>
    </div>
  );
};

export default App;
