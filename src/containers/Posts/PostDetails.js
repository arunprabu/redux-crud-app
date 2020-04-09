import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getPostById, deletePostById, updatePostById } from '../../services/postService';
import { Link } from 'react-router-dom';

class PostDetails extends Component {

  componentDidMount(){
    // ideal place for making ajax calls 
    // we have to dispatch an action 

    // read url parameters in react -- class comp 
    console.log(this.props.match.params.id);
    this.props.onGetPostById(this.props.match.params.id);
  }

  deletePostHandler = () => {
    // dispatching action thru action creator
    this.props.onDeletePostById(this.props.post.id);
  }

  updateHandler = (e) => {
    e.preventDefault();
    console.log(this.getTitle.value);
    console.log(this.getContent.value);

    // dispatching action thru action creator
    this.props.onUpdatePostById({
      id: this.props.post.id,
      title: this.getTitle.value,
      body: this.getContent.value
    });

    // close the modal -- thru js and jquery 
  }

  render(){
    console.log(this.props.post);
    return(
      <div className='container'>
        <h1>Post Details</h1>
        
        { 
          Object.keys(this.props.post).length !== 0? 
          <div>
            <div className="list-group">
              <div className="list-group-item">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">{this.props.post.title} </h5>
                  <small>Post Id: {this.props.post.id}</small>
                </div>
                <p className="mb-1">
                  {this.props.post.body}
                </p>
                <small>UserId: {this.props.post.userId}</small>
                <br />
                <button className='btn btn-primary' data-toggle='modal' 
                data-target='#editModal'>Edit</button> &nbsp;
                <button className='btn btn-danger' 
                onClick={ this.deletePostHandler}>Delete</button>
              </div>
            </div>
            <div className="modal fade" id="editModal"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Update Post
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form onSubmit={this.updateHandler}>
                        <input required type="text"
                          placeholder="Enter Post Title"
                          className='form-control' 
                          defaultValue={this.props.post.title}
                          ref={(input) => this.getTitle = input} 
                          /><br />
                        <textarea required rows="5" cols="28"
                          placeholder="Enter Post" 
                          className='form-control' 
                          defaultValue={this.props.post.body}
                          ref={(input) => this.getContent = input} 
                        /><br />
                        <button className='btn btn-primary' type='submit'>Save Changes</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          :

          <div className='alert alert-success'>
            Deleted Successfully! 
            You can go to <Link to='/posts'>Posts</Link> page!!
          </div>
        
        }
          
      </div> 
    )
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.posts
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetPostById: (id) => dispatch(getPostById(id)),
    onDeletePostById: (id) => dispatch(deletePostById(id)),
    onUpdatePostById: (post) => dispatch(updatePostById(post))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);