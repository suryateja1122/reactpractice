import React, { useState } from 'react'

function HookCountertwo() {
  const [count, setCount] = useState(0)
  

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(0)
        }}
      >
        reset
      </button>
      <button
        onClick={() => {
          setCount(prevCount=>prevCount + 1)
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          setCount(prevCount=>prevCount - 1)
        }}
      >
        decrement
      </button>
      <button
        onClick={() => {
          setCount(prevCount=>prevCount + 5)
        }}
      >
        increment by 5
      </button>
    </div>
  )
}

export default HookCountertwo
