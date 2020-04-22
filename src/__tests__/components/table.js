import React from 'react'
import TableComponent from './../../components/table'
import App from './../../App'
import renderer from 'react-test-renderer'
import { cleanup } from '@testing-library/react';

describe('TableComponent', () => {
    afterEach(cleanup);

    it('it renders correctly', () => {
        const tree = renderer.create(<TableComponent value={ [ 1940,2010 ] } />);
        expect(tree.toJSON()).toMatchSnapshot();
    });

    it('value changes, the table updates', () => {
        const value = [ 1964, 1987 ];
        const tree = renderer.create(<TableComponent value={ value } />);
    });
});