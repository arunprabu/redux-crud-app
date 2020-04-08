import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import Posts from './components/Posts/Posts';
import About from './components/About/About';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import PostForm from './containers/Posts/PostForm';
import PostDetails from './containers/Posts/PostDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Header></Header>

        <div className='MarginTop'>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/posts" component={Posts} exact/>
            <Route path="/posts/new" component={PostForm}/>
            <Route path="/posts/:id" component={PostDetails}/>
            <Route path="/about" component={About}/>
          </Switch>
        </div>

        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
