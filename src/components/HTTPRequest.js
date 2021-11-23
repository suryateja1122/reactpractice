import React,{Component} from 'react'
import axios from 'axios'

class HTTPRequest extends Component{
 constructor(props){
  super(props)
  this.state = {
   posts : []
  }
 }
 componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response =>  {console.log(response)
   this.setState({posts : response.data})
  })
  .catch(err => console.log(err))
 }
 render(){
  const { posts} = this.state
  return (
    <div>
      
      {
       
       posts.map(post => { 
        return <div key ={post.id}>{post.body}
        {post.title} </div>
 
       }) 
       
      }

    </div>
  )
 
 }
}
export default HTTPRequest