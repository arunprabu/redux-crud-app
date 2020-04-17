import React from 'react';
import {connect} from 'react-redux';

const About = (props) => {
 
  console.log(props);
  const loadContactsHandler = () => {
    props.dispatch({
      type: 'FETCH_USER'
    });
    alert('open console to see the output. ');
  }

  return (
    <div className='container'>
      <h1>About</h1>
      <button onClick={loadContactsHandler}>Load Contacts</button>
    </div>
  )
  
}

export default connect()(About);