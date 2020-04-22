import React from 'react'
import SliderRange from './../../components/slider'
import renderer from 'react-test-renderer'
import { cleanup } from '@testing-library/react';

describe('SliderRange', () => {
    afterEach(cleanup);

    it('renders correctly', () => {
        const tree = renderer.create(<SliderRange />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});