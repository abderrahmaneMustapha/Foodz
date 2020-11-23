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
import {SignupPageConnect , SigninPageConnect, Signout}  from "./domain/registration/index"
const history = createBrowserHistory();



ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <Router history={history}>

      <Switch>

        <Route path="/restaurants/:name" component={Restaurant} />
        <Route path='/search' component={Search} />      
        <Route  exact path='/' component={Home} />
        <Route  exact path='/signup' component={SignupPageConnect}  />
        <Route exact  path='/login' component={SigninPageConnect}  />
        <Route exact path='/logout' component={Signout} />

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
