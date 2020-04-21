import React from 'react'
import renderer from 'react-test-renderer'
import { SliderRange } from './../components/slider'

describe("SliderRange", () => {
    it('renders correctly', () => {
        const tree = renderer.create(<SliderRange />).toJSON();
        expect(tree).toMatchSnapshot();
    })

})