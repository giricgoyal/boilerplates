// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import './styles/index.scss'

import store from './redux/store'
import App from './App'

import makeServer from 'stub-server/server'

if (process.env.NODE_ENV === 'development') {
    makeServer()
}

const root = createRoot(document.getElementById('app'))

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
)
