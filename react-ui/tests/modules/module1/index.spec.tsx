import React from 'react'
import ShallowRenderer from 'react-test-renderer/shallow'
import Module1 from 'src/modules/module1'

describe('modules/module1', () => {
    let container
    const renderer = new ShallowRenderer()

    beforeEach(() => {
        container = renderer.render(<Module1 />)
    })

    test('should render and match snapshot', () => {
        expect(container).toMatchSnapshot()
    })
})
