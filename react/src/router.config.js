import React from 'react';
import { Router, Route, hashHistory, browserHistory, IndexRoute, Redirect } from 'react-router';

import App from './components/App';
import Head from './components/head';
import Foot from './components/foot';
import Main from './components/main';
import Rush from './components/rush';
import Center from './components/Center';
import Nearby from './components/Nearby';
import Guanzhu from './components/Guanzhu';
import Login from './components/Login';
import Register from './components/Register';
import Detail from './components/Detail';
import Shopcart from './components/Shopcart';

const RouterConfig = () => (
    <Router history={hashHistory} >
        <Route path='/' component={App}>
            <IndexRoute component={Main}/>
            <Route path='main' component={Main}/>
            <Route path='rush' component={Rush}/>
            <Route path='center' component={Center}/>
            <Route path='nearby' component={Nearby}/>
            <Route path='guanzhu' component={Guanzhu}/>
            <Route path='login' component={Login}/>
            <Route path='register' component={Register}/>
            <Route path="detail" component={Detail}>
                <Route path=":aid" component={Detail}/>
            </Route>
            <Route path='shopcart' component={Shopcart}/>
        </Route>
    </Router>
)
export default RouterConfig;