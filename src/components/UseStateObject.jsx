import React, { useState } from 'react'

function UseStateObject() {
  const [name, setName] = useState({ firstName: '', lastName: '' })
  return (
    <div>
      <form>
        <label>first name</label>
        <input
          type='text'
          value={name.firstName}
          onChange={(e) => {
            setName({ ...name,firstName: e.target.value })
          }}
        />
        <label>last name</label>
        <input
          type='text'
          value={name.lastName}
          onChange={(e) => {
            setName({ ...name,lastName: e.target.value })
          }}
        />
      </form>
      <h1>{name.firstName}</h1>
      <h1>{name.lastName}</h1>
      <h1>{JSON.stringify(name)}</h1>
    </div>
  )
}

export default UseStateObject
