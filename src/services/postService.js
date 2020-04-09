import axios from "axios";
import {ADD_POST, GET_POSTS, DELETE_POST, GET_POST_BY_ID, EDIT_POST} from '../actions/types';
import {toastr} from 'react-redux-toastr';

const POSTS_API_URL = 'http://jsonplaceholder.typicode.com/posts';

export const createPost = (data) => {
  return (dispatch) => {
    // AJAX call to add a post
    return axios.post(POSTS_API_URL, data )
      .then(response => {
          toastr.success('Success', 'Post has been created!');
          dispatch({
            type: ADD_POST,
            status: {
              id: response.data.id,
              title: response.data.title,
              body: response.data.body
            }
          });
      })
      .catch(error => {
          throw (error);
      })
      .finally( () => {
        
      }) 
  };
};

export const getPosts = () => {
  return (dispatch) => {
    // AJAX call to get posts
    return axios.get(POSTS_API_URL )
      .then(response => {
          dispatch({
            type: GET_POSTS,
            posts: response.data
          });
      })
      .catch(error => {
          throw (error);
      })
      .finally( () => {
        
      }) 
  };
}

export const getPostById = (postId) => {
  return (dispatch) => {
    // AJAX call to get posts
    return axios.get(POSTS_API_URL + '/' + postId)
      .then(response => {
          dispatch({
            type: GET_POST_BY_ID,
            post: response.data
          });
      })
      .catch(error => {
          throw (error);
      })
      .finally( () => {
        
      }) 
  };
}

export const deletePostById = (postId) => {
  return (dispatch) => {
    // AJAX call to get posts
    return axios.delete(POSTS_API_URL + '/' + postId)
      .then(response => {
          dispatch({
            type: DELETE_POST,
            post: response.data
          });
      })
      .catch(error => {
          throw (error);
      })
      .finally( () => {
        
      }) 
  };
}

export const updatePostById = (post) => {
  return (dispatch) => {
    // AJAX call to get posts
    return axios.put(POSTS_API_URL + '/' + post.id, post)
      .then(response => {
          dispatch({
            type: EDIT_POST,
            post: response.data
          });
      })
      .catch(error => {
          throw (error);
      })
      .finally( () => {
        
      }) 
  };
}