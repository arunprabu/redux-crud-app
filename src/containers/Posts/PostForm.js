import React, { Component } from 'react'

class PostForm extends Component {

  render(){
    return(
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h3>Create Post!</h3>
            <form >
              <input required type="text"
                placeholder="Enter Post Title"
                className='form-control'/><br />
              <textarea required rows="5" cols="28"
                placeholder="Enter Post"
                className='form-control' /><br />
              <button className='btn btn-primary' type='submit'>Post</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default PostForm;