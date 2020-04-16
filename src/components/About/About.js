import React from 'react';
import {connect} from 'react-redux';

const About = (props) => {

  console.log(props);
  props.dispatch({
    type: 'FETCH_USER'
  });
  return(
    <div className='container'>
      <h1>About</h1>
    </div>
  )
}

export default connect()(About);