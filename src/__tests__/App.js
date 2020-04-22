import React from 'react';
import renderer from 'react-test-renderer';
import App from './../App';
import TableComponent from './../components/table';
import SliderRange from './../components/slider';
import { cleanup } from '@testing-library/react';

jest.mock('./App.css', () => jest.fn());

describe('App', () => {
  afterEach(cleanup);

  it('it renders correctly', () => {
      const tree = renderer.create(
          <SliderRange />,
          <TableComponent />
    );
      expect(tree.toJSON()).toMatchSnapshot()
  })
});