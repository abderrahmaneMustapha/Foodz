import React from 'react';
import ReactDOM from 'react-dom';
import { Router,Route, Switch } from "react-router";
import { createBrowserHistory } from "history";



import Home from './domain/home/index';
import Search from "./domain/search/index"
import Restaurant from './domain/restaurant/index'

import * as serviceWorker from './serviceWorker';
import './index.css';
const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
    <Switch>
    <Route path="/restaurant/:name">
      <Restaurant/>
    </Route>
    <Route path='/search'>
      <Search />
    </Route>
    <Route path='/'>
      <Home />
    </Route>

    </Switch>
    
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
