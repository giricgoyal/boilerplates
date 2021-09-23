import * as React from 'react'
import { Switch } from 'react-router-dom'
import Route from './components/route'
import Login from './modules/login'
import Admin from './modules/admin'

function Router() {
    return (
        <>
            <Route path="/login" Component={Login} />
            <Route path="/admin" Component={Admin} />
        </>
    )
}

export default Router
