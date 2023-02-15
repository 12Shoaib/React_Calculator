import calculator from './calculator.module.css'
import {useState} from 'react'


const Calculator = () => {
    const [userInput , setUserInput] = useState('')

    const calculateValue = () => {
       const result = eval(userInput)
       setUserInput(result)
    }

    const clearinginInput = () => {
        setUserInput("")
    }

    const inputCapture = (e) => {
        setUserInput(userInput.concat(e.target.name))

    }
    return(
        <div className={calculator.mainComponent}>
           <div className={calculator.resultScreen}>
            <input value={userInput} className={calculator.inputField}/>
            </div> 
            <div className={calculator.buttons}>
            <button name='7' className={calculator.button} onClick={inputCapture}>7</button>
            <button name='8' className={calculator.button} onClick={inputCapture}>8</button>
            <button name='9' className={calculator.button} onClick={inputCapture}>9</button>
            <button name='/' className={calculator.button} onClick={inputCapture} id={calculator.operatorButton}>/</button>
            <button name='4' className={calculator.button} onClick={inputCapture}>4</button>
            <button name='5' className={calculator.button} onClick={inputCapture}>5</button>
            <button name='6' className={calculator.button} onClick={inputCapture}>6</button>
            <button name='x' className={calculator.button} onClick={inputCapture} id={calculator.operatorButton}>x</button>
            <button name='1' className={calculator.button} onClick={inputCapture}>1</button>
            <button name='2' className={calculator.button} onClick={inputCapture}>2</button>
            <button name='3' className={calculator.button} onClick={inputCapture}>3</button>
            <button name='+' className={calculator.button} onClick={inputCapture} id={calculator.operatorButton}>+</button>
            <button name='.' className={calculator.button} onClick={inputCapture}>.</button>
            <button name='0' className={calculator.button} onClick={inputCapture}>0</button>
            <button className={calculator.button} onClick={calculateValue} >=</button>
            <button name='-' className={calculator.button} onClick={inputCapture} id={calculator.operatorButton} >-</button>
            <button className={calculator.button} onClick={clearinginInput} id={calculator.clearBtn}>clear</button>

            </div>
        </div>
    )
}

export default Calculator