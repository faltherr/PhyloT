import { configure, shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import store from '../../store'
import FormContainer from '../form/FormContainer'

configure({ adapter: new Adapter() })

describe('FormContainer', () => {
    //On the first run of this test Jest generates a snapshot that will be compared in future tests
    //If the component is intentionally changed we should update the snapshot `jest --updateSnapshot`
    it('Renders to DOM', () => {
        const wrapper = shallow(<FormContainer store={store}/>);
        expect(toJSON(wrapper)).toMatchSnapshot()
    })
    // it ('Renders two components', ()=>{})
})