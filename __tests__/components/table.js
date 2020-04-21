import { TableComponent } from './../../src/components/table'
import renderer from 'react-test-renderer'

describe("TableComponent", () => {
    it('it renders correctly', () => {
        const tree = renderer.create(<TableComponent />);
        expect(tree.toJSON()).toMatchSnapshot()
    })
})