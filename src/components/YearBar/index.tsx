import { useState } from 'react'
import { Bar } from '@/components/YearBar/styles'
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io'

export default function YearBar() {
  const [Year, setYear] = useState([2020])

  function handleMinus() {
    let X = Year
    if (X > 2015) {
      X = X - 1
      setYear(X)
    } else {
      setYear([2015])
    }
  }

  function handlePlus() {
    let X = Year
    if (X < 2020) {
      X = X + 1
      setYear(X)
    } else {
      setYear([2020])
    }
  }
  return (
    <Bar>
      <button type="button" onClick={handleMinus}>
        <IoMdArrowDropleft />
      </button>
      <h1> {Year} </h1>
      <button type="button" onClick={handlePlus}>
        <IoMdArrowDropright />
      </button>
    </Bar>
  )
}
