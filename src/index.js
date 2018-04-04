import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import promise from 'redux-promise';
import {AUTH_USER, FETCH_USER} from './actions/types';
import ShowPage from './components/pages/profile/show';


import registerServiceWorker from './registerServiceWorker';
const createStoreWithMiddleware = applyMiddleware(reduxThunk, promise)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');

if(token) {
  store.dispatch({type: AUTH_USER});
}


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/users/:userId" component={ShowPage} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);
registerServiceWorker();
