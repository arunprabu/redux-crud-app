import React, { Component } from 'react';
// // Step 16& 16.1: let's get the state data from the store and 
//convert them into read-only props. 
// Redux's core purpose is to get rid of state across the app and make it props. 
import { connect } from 'react-redux';

import Post from '../../components/Posts/Post';
import { getPosts, deletePost } from '../../services/postService';

class PostList extends Component {

  componentDidMount(){
    console.log('into comp did mount');
    console.log(this.props);
    this.props.onGetPosts();
  }


  render(){
    console.log(this.props.posts);

    let posts = null;
    if(this.props.posts && this.props.posts.length > 0){
      posts = this.props.posts.map( (post, index) => {
        console.log(post);
        return (
          <Post key={index} 
            title={post.title} 
            body={post.body} 
            id={post.id} userId={post.userId} onDelete={ this.props.onDelete }></Post>
        )
      });
    }

    return(
      <div className='container'>
        <h3>Post List</h3>
        { this.props.posts && this.props.posts.length > 0? 
            posts
          :
          <div className='alert alert-warning'>
            Post Not Found! You can add one.
          </div>
        }
      </div> 
    )
  }
}
// Step 16.2
// to get the state and to convert that to props 
// in the PostList.js file, make the following change in the export.
const mapStateToProps = (state) => {
  return {
      posts: state.posts
  }
} 

// The following is around action creators
//  this method connects redux actions to react props.
const mapDispatchToProps = dispatch => {
  return {
    onDelete: id => {
      dispatch(deletePost(id));
    },
    onGetPosts: () => {
      dispatch(getPosts());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);