import { shallowMount } from '@vue/test-utils'
import Circular from './circular.vue'
describe('deve existir um gráfico circular com texto', () => {
  it('deve renderizar a div e a span', () => {
    const sut = shallowMount(Circular, {
      propsData: { percentage: 30 },
    })
    expect(sut.is(Circular)).toBe(true)
    expect(sut.isVueInstance()).toBe(true)
    expect(sut.find('div').exists()).toBe(true)
    expect(sut.find('.circular-chart').exists()).toBe(true)
    expect(sut.find('span').exists()).toBe(true)
    expect(sut.find('span').text()).toBe('30')
    expect(sut.find('.circular-chart__percent').exists()).toBe(true)
  })
})
