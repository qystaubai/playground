import React from 'react';
import {Route, Switch, Redirect} from 'react-router';
import HomePage from './pages/Home';
import ListPage from './pages/List';


const Router = (): React.ReactElement => {
    return (
        <Switch>
            <Route path='/' component={HomePage} exact/>
            <Route path='/list' component={ListPage}/>
            <Redirect to='/'/>
        </Switch>
    );
};

export default Router;
