import React from 'react'
import { shallow } from 'enzyme'
import Component, { Internal } from './Home'

describe('Home', () => {
  describe('rendering', () => {
    it('should return function', () => {
      expect(typeof Component).toBe('function')
    })

    it('should define prop types', () => {
      expect(Internal.propTypes).toBeDefined()
    })

    it('should render', () => {
      const wrapper = shallow(<Component />)
      expect(wrapper.exists()).toBe(true)
    })

    it('should display "Redux First Router Boilerplate" text', () => {
      const wrapper = shallow(<Component />).dive()
      wrapper.debug()
      expect(wrapper.contains('Redux First Router Boilerplate')).toBe(true)
    })
  })
})
