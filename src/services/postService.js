import axios from "axios";
import {ADD_POST, GET_POSTS, DELETE_POST} from '../actions/types';
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

export const deletePost = (id) => {
  console.log(id);
  return (dispatch) => {
    dispatch({
      type: DELETE_POST,
      posts: []
    });
  }
}