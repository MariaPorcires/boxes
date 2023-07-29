
import './App.css'
import Boxes from './Boxes'
import { useState } from 'react'
import Box from './Box';

function App() {
  const [squares, setSquares] = useState(Boxes);

  function toggle(id) {
    setSquares(prevSquares => {
      return prevSquares.map((square) => {
        return square.id === id ? {...square, on: !square.on} : square
      })
    })
  }

  const squareElem = squares.map(square => (
    <Box 
      key={square.id} 
      id={square.id}
      on={square.on}
      toggle={toggle}
      />
  ))

  return (
    <>
      { squareElem }
    </>
      
  )
}

export default App
