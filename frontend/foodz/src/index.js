import React from 'react';
import ReactDOM from 'react-dom';
import { Router,Route, Switch } from "react-router";
import { createBrowserHistory } from "history";



import { Provider } from 'react-redux'
import {store} from "./store"




import Home from './domain/home/index';
import Search from "./domain/search/index"
import Restaurant from './domain/restaurant/index'

import * as serviceWorker from './serviceWorker';

import './index.css';
import { SigninPage, SignupPage } from "./domain/registration/index"
const history = createBrowserHistory();
console.log(store.getState())


ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <Router history={history}>

      <Switch>

        <Route path="/restaurants/:name" component={Restaurant} />
        <Route path='/search' component={Search} />      
        <Route  exact path='/' component={Home} />
        <Route  exact path='/signup' component={SignupPage}  />
        <Route exact  path='/login' component={SigninPage}  />

      </Switch>
    
    </Router>
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
