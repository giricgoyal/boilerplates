// Copyright (c) Microsoft. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for full license information.

import * as React from 'react'
import * as ReactDOM from 'react-dom'

import './styles/index.scss'
import App from './App'

import makeServer from 'stub-server/server'

if (process.env.NODE_ENV === 'development') {
    console.log('make server')
    makeServer()
}

ReactDOM.render(<App />, document.getElementById('app'))
