import { shallowMount } from '@vue/test-utils';
import Component from '@/App.vue'

let wrapper

beforeEach(() => {
  wrapper = shallowMount(Component)
})

afterEach(() => {
  wrapper.destroy();
})

describe('Testing App component', () => {
    it('is a Vue instance', () => {
      expect(wrapper.isVueInstance).toBeTruthy()
    })
})