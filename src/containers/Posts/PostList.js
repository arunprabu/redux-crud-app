import React, { Component } from 'react'

import Post from '../../components/Posts/Post';

class PostList extends Component {

  render(){
    return(
    
      <div className='container'>
        <h3>Post List</h3>
        <Post></Post>
      </div> 
    )
  }
}

export default PostList;