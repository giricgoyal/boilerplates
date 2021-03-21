import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Topbar from '../../components/topbar';
import Router from '../../components/router';

function App () {
    return (
        <BrowserRouter>
            <Topbar />
            <Router />
        </BrowserRouter>
    )
}

export default App;