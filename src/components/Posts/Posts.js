import React from 'react'
import PostForm from '../../containers/Posts/PostForm';
import PostList from '../../containers/Posts/PostList';

const Posts = () => {

    return(
      <div className='container'>
        <h1>Posts</h1>
        <div className='row'>
          <div className='col-md-4'>
            <PostForm></PostForm>
          </div>
          <div className='col-md-8'>
            <PostList></PostList>
          </div>
        </div>
      </div>
    )
}

export default Posts;