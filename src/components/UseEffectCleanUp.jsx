import React, { useState, useEffect } from 'react'

function UseEffectCleanUp() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const [display, setDisplay] = useState(true)

  const logMousePosition = (e) => {
    console.log('mouse event')
    setX(e.clientX)
    setY(e.clientY)
  }
  useEffect(() => {
    console.log('use effect called ')
    window.addEventListener('mousemove', logMousePosition)
    return () => {
      console.log('unmount code');
      window.removeEventListener('mousemove', logMousePosition)
    }
  }, [])
  return (
    <div>
      <button
        onClick={() => {
          setDisplay(!display)
        }}
      >
        toggle
      </button>
      {display && (
        <h1>
          x: {x} y: {y}
        </h1>
      )}
    </div>
  )
}

export default UseEffectCleanUp
