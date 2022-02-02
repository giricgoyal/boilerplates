import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import Module1 from './modules/module1'

export default function Router(): React.ReactElement {
    return (
        <Routes>
            <Route path="/" element={<Module1 />} />
        </Routes>
    )
}
