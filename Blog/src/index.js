import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import promise from 'redux-promise';


// import App from './components/app';
import PostsIndex from './components/post_index';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// class Hello extends React.Component{
//   render(){return <div>Hello</div>}
// }

// class Goodbye extends React.Component{
//   render(){return <div>Goodbye</div>}
// }

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    {/* <App /> */}
    <BrowserRouter>
      <div>
        {/* <Route path='/hello' component={Hello} />
        <Route path='/goodbye' component={Goodbye} /> */}
        <Route path='/' component={PostsIndex} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
