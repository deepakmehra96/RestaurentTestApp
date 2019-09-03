import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import Main from '../Container/MainScreen';

const history = createBrowserHistory()

const Routes = () => 
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={Main} />
            {/* <Route exact path="/Dashboard" component={Dashboard} /> */}
        </Switch>
    </Router>

export default Routes