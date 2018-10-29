import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';


// import App from './components/app';
import PostsIndex from './components/post_index';
import PostsNew from './components/post_new';
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
        <Switch>
          {/* <Route path='/hello' component={Hello} />
          <Route path='/goodbye' component={Goodbye} /> */}
          <Route path='/posts/new' component={PostsNew} />
          <Route path='/' component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
