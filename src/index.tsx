import * as React from 'react'
import { render } from 'react-dom'
import DashBoard from './components/app'
import Info from './components/info'
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './style/main.scss';

function main() {
  ReactDOM.render(
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={DashBoard} />
            <Route exact path="/Info" component={Info} />
        </Switch>
      </BrowserRouter>
    , document.getElementById('app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);