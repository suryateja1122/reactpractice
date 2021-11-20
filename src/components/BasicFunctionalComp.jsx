import React from 'react'

function BasicFunctionComp(props) {
  function clickHandler() {
    console.log('buttion clicked')
  }

  return (
    <div>
      <h1>
        <button onClick={clickHandler}>c</button>
      </h1>
    </div>
  )
}
export default BasicFunctionComp
