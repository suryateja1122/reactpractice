import React, { useState, useEffect } from 'react'
import axios from 'axios'


function FechingDataEffect() {
  const [post, setPost] = useState({})
  const [id,setId] = useState(1)
  const[idButton,setIdButton] = useState(1)

  const handleClick = ()=>{
   setIdButton(id)
  }
  useEffect(() => {
   console.log('use effect is called');
   
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idButton}`)
      
      .then((res) => {
        
        setPost(res.data)
      })
      .catch((err) => console.log(err))
  }, [idButton])

  return (
    <div>
      <div>
        <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
        <button onClick={handleClick}>get post details</button>
      </div>

      <h1>{post.title}</h1>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
    </div>
  )
}

export default FechingDataEffect
