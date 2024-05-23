import * as React from 'react'
import { createRoot } from 'react-dom/client'

import './styles/index.scss'
import App from './App'

import makeServer from 'stub-server/server'

if (process.env.NODE_ENV === 'development') {
    makeServer()
}

const root = createRoot(document.getElementById('app'))
root.render(<App />)
