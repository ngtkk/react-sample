import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('test',
 ()=>{ it('test 1',
 ()=>{ expect(1 + 1). toBe(2) })

it('test2', ()=>{ expect("a" + "b").toBe("ab") }) })


