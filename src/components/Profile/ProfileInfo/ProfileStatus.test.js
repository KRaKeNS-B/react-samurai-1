import React from 'react'
// import { create } from 'react-test-renderer'
import ProfileStatus from './ProfileStatus'
import { configure, mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { expect } from 'chai';
// import classes from './ProfileInfo.module.css'

configure({ adapter: new Adapter() })

describe(`ProfileStatus component`, () => {
  test(`status from props should be in the state`, () => {
    const component = mount(<ProfileStatus status='test' />)

    expect(component.props().status).to.equal('test')
  })

  test(`after creation span should be displayed`, () => {
    const component = shallow(<ProfileStatus status='test' />)

    expect(component.exists('span')).to.equal(true)
  })

  test(`after creation input shouldn't be displayed`, () => {
    const component = shallow(<ProfileStatus status='test' />)

    expect(component.exists('input')).to.equal(false)
  })

  test(`input should be  displayed in editMode instead of span`, () => {
    const component = shallow(<ProfileStatus status='test' />)
    component.find('span').at(0).simulate('dblclick')
    expect(component.exists('input')).to.equal(true)
    expect(component.find('input').at(0).prop('value')).to.equal('test')
  })

  test(`callback should be called`, () => {
    const mockCallback = jest.fn()
    const component = shallow(<ProfileStatus status='test' updateStatus={ mockCallback } />)
    component.find('span').at(0).simulate('dblclick')
    component.find('input').at(0).simulate('blur')
    expect(mockCallback.mock.calls.length).to.equal(1)
  })
})
