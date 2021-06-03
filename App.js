import './App.css';
import React, { useRef, useState } from 'react';

function App() {
  const [str, setStr] = useState('')
  const [result, setResult] = useState('')
  const [sig, setSig] = useState('')

  const audioRef = useRef()

  function setMath(x) {
    setStr(str + x)
    audioRef.current.play()
  }

  function setOutput() {
    setResult(eval(str))
    setSig('=')
    audioRef.current.play()
  }

  function deleteMath() {
    setStr('')
    setResult('')
    setSig('')
    audioRef.current.play()
  }

  function squareRoot(x) {
    setResult(Math.sqrt(x))
    setSig('=')
  }

  function square() {
    setResult(str**2)
    setSig('=')
  }

  function fatorial(x) {
    var fatorial = x;
    var output = fatorial;
    for (var i = 1; i < fatorial; i++) {
      output *= i;
    setResult(output)
    setSig('=')
}
  }

  function sin(x) {
    setResult(Math.sin(x))
    setSig('=')
  }

  function cos(x) {
    setResult(Math.cos(x))
    setSig('=')
  }

  return (
    <div className='cauculator-style'>
      <div>
        <button onClick={() => setMath('0')}>0</button>
        <button onClick={() => setMath('1')}>1</button>
        <button onClick={() => setMath('2')}>2</button>
        <button onClick={square} className='fun-button'>Y²</button>
      </div>
      <div>
        <button onClick={() => setMath('3')}>3</button>
        <button onClick={() => setMath('4')}>4</button>
        <button onClick={() => setMath('5')}>5</button>
        <button onClick={() => setMath('**')} className='fun-button'>Y^x</button>
      </div>
      <div>
        <button onClick={() => setMath('6')}>6</button>
        <button onClick={() => setMath('7')}>7</button>
        <button onClick={() => setMath('8')}>8</button>
        <button onClick={() => squareRoot(str)} className='fun-button'>Sqr</button>
      </div>
      <div>
        <button onClick={() => setMath('9')}>9</button>
        <button onClick={() => setMath('-')} className='sig-button'>-</button>
        <button onClick={() => setMath('+')} className='sig-button'>+</button>
        <button onClick={() => fatorial(str)} className='fun-button'>!</button>
      </div>
      <div>
        <button onClick={() => setMath('.')} className='sig-button'>,</button>
        <button onClick={() => setMath('/')} className='sig-button'>/</button>
        <button onClick={() => setMath('*')} className='sig-button'>x</button>
        <button onClick={() => sin(str)} className='fun-button'>sin</button>
      </div>
      <div>
        <button onClick={deleteMath} className='sig-button'>AC</button>
        <button onClick={() => setOutput('=')} className='equal-button'>=</button>
        <button onClick={() => cos(str)} className='fun-button'>cos</button>
      </div>
      <div className='result'>
        {str} {sig} {result}
      </div>  
      <audio ref={audioRef} src="https://dight310.byu.edu/media/audio/FreeLoops.com/2/2/Button%20Click%20Sound-12192-Free-Loops.com.mp3"></audio>
    </div>
  )
}

export default App;