import React from 'react'

function NameList() {
  const names = [
    { id: 1, name: 'surya', age: 26, skill: 'react' },
    { id: 2, name: 'ravi', age: 25, skill: 'angular' },
    { id: 3, name: 'sagar', age: 27, skill: 'tester' },
    { id: 4, name: 'surya', age: 26, skill: 'tester' },
  ]

  return (
    <div>
      {names.map((name) => (
        <h2 key={name.id}>i am {name.name} and i am {name.age} and i am good at {name.skill} </h2>
      ))}
    </div>
  )
}

export default NameList
