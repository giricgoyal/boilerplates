import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

function Router() {
    return (
        <Switch>
            <Route exact path='/'>
                Home
            </Route>
            <Route path='/page1'>
                page 1
            </Route>
            <Route path='/page2'>
                page 2
            </Route>
        </Switch>
    )
}

export default Router;