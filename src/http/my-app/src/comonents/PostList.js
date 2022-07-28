import React, { Component } from 'react'
import axios from 'axios'

export class PostList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       posts:[],
       error:''
    }
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response=>{
    console.log(response)
    this.setState({posts:response.data})
    })
    .catch(error=>{
      console.log(error)
      this.setState({errormsg:"error"})
    })
  }
  render() {
    const {posts,errormsg}=this.state
    return (
      <div>
        {
            posts.length?
            posts.map(post=><div key={post.id}>{post.title}</div>):
            null

        }
        {
          errormsg?<div>{errormsg}</div>:null
        }
      </div>
        

          
      
    )
  }
}

export default PostList