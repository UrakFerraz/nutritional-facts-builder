import { shallowMount } from '@vue/test-utils'
import ChartBoxVue from './chart-box.vue'

describe('deve inicializar o componente chart-box', () => {
  it('displays message', () => {
    const sut = shallowMount(ChartBoxVue)
    expect(sut.html()).toContain('<div class="curcular-chart">')
  })
})
