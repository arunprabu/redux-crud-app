import React, { Component } from 'react';
// Step 10 & 10.1: Use connect in this component, so that it can dispatch an action
import {connect} from 'react-redux';
import { createPost } from '../../services/postService';

class PostForm extends Component {

  // Step 9 -- working with submission logic 
  addPostSubmitHandler = (e) =>{
    e.preventDefault();
    const title = this.getTitle.value;
    const body = this.getContent.value;
    
    const data = {
      title,
      body
    }
    console.log(data);
    console.log(this.props);
    // Step 11: Dispatch and action with the data.. 
    // connect() helps props have dispatch method
    // using it we can dispatch action with type and data (payload)
    this.props.dispatch(createPost(data));

    this.getTitle.value = '';
    this.getContent.value = '';
  }

  render(){
    return(
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h3>Create Post!</h3>
            <form onSubmit={this.addPostSubmitHandler}>
              <input required type="text"
                placeholder="Enter Post Title"
                className='form-control' ref={(input) => this.getTitle = input}/><br />
              <textarea required rows="5" cols="28"
                placeholder="Enter Post"
                className='form-control' ref={(input) => this.getContent = input}/><br />
              <button className='btn btn-primary' type='submit'>Post</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

// Step 10.2
  //last line of the compoent should be the following. 
  // after connecting props related to dispatching an action will be available in this component. 
export default connect()(PostForm);