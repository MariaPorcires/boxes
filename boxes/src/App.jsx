
import './App.css'
import Boxes from './Boxes'
import { useState } from 'react'
import Box from './Box';

function App() {
  const [squares, setSquares] = useState(Boxes);

  const squareElem = squares.map(square => (
    <Box key={square.id} on={square.on}/>
  ))

  return (
    <>
      {squareElem}
    </>
      
  )
}

export default App
