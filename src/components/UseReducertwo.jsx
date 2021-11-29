import React,{useReducer} from 'react'

const initialState = {
 firstCounter : 0,
 secondCounter:10
 }

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...initialState, firstCounter: state.firstCounter + 1 }
    case 'decrement':
      return { ...initialState, firstCounter: state.firstCounter - 1 }
    case 'reset':
      return initialState
    case 'increment two':
      return { ...initialState, secondCounter: state.secondCounter + 1 }
    case 'decrement two':
      return { ...initialState, secondCounter: state.secondCounter - 1 }
    default:
      return
  }
}

function UseReducertwo() {

 const [count, dispatch] = useReducer(reducer, initialState)

 return (
   <div>
     <div>{count.firstCounter}</div>
     <div>{count.secondCounter}</div>
     <button onClick={() => dispatch({ type: 'increment' })}>increment</button>
     <button onClick={() => dispatch({ type: 'decrement' })}>decrement</button>
     <button onClick={() => dispatch({ type: 'increment two' })}>
       increment counter 2
     </button>
     <button onClick={() => dispatch({ type: 'decrement two' })}>
       decrement counter 2
     </button>
     <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
   </div>
 )
}

export default UseReducertwo
