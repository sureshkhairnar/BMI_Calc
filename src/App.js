import React, { useState } from 'react'
import './App.css'

function App() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')

  const calcBmi = (e) => {
    e.preventDefault()
    if (weight === '' || height === '') {
      alert('Please enter valid values for weight and height')
    } else {
      const calcBmi = (weight / (height * height)) * 703
      setBmi(calcBmi.toFixed(1))
      if (calcBmi < 18.5) {
        setMessage('You are underweight')
      } else if (calcBmi >= 18.5 && calcBmi <= 25) {
        setMessage('You have a healthy weight')
      } else if (calcBmi > 25 && calcBmi <= 30) {
        setMessage('You are overweight')
      } else {
        setMessage('You are obese')
      }
    }
  }

  const reload = () => {
    window.location.reload()
  }

  return (
    <div className="App">
      <div className="container">
        <h2 style={{ textDecoration: 'underline' }}>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input
              type="number" // Changed type to number for better input validation
              placeholder="Enter weight value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (inches)</label>
            <input
              type="number" // Changed type to number for better input validation
              placeholder="Enter height value"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
            <button type="button" onClick={reload}>
              Reload
            </button>{' '}
            {/* Changed type to "button" */}
          </div>
          <div>
            {bmi && <h2>Your BMI is: {bmi}</h2>}{' '}
            {/* Display BMI only if it's calculated */}
            {message && (
              <p style={{ textAlign: 'center' }}>
                <mark style={{ padding: '5px' }}>{message}</mark>
              </p>
            )}{' '}
            {/* Display message only if it's set */}
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
