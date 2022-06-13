import { shallowMount } from '@vue/test-utils'
import chartBoxVue from './chart-box.vue'

describe('deve inicializar o componente chart-box', () => {
  it('displays message', () => {
    const sut = shallowMount(chartBoxVue)
    expect(sut.html()).toContain('<div class="curcular-chart">')
  })
})
