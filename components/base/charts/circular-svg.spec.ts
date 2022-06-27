import { shallowMount } from '@vue/test-utils'
import CircularSvg from './circular-svg.vue'
describe('deve existir um svg circular', () => {
  it('deve renderizar um svg no html', () => {
    const sut = shallowMount(CircularSvg, {
      propsData: { percentage: 10 },
    })
    expect(sut.html()).toContain(
      '<svg width="100%" height="100%" viewBox="0 0 40 40" class="circular">'
    )
  })
  it('deve renderizar um svg com círculo com 43% preenchido', () => {
    const sut = shallowMount(CircularSvg, {
      propsData: { percentage: 43 },
    })
    expect(sut.html()).toContain(
      '<circle cx="20" cy="20" r="15" fill="transparent" stroke-dasharray="43 57" class="circular-segment"></circle>'
    )
  })
  it('deve renderizar o círculo 100% preenchido', () => {
    const sut = shallowMount(CircularSvg, {
      propsData: { percentage: 120 },
    })
    expect(sut.html()).toContain(
      '<circle cx="20" cy="20" r="15" fill="transparent" stroke-dasharray="100 0" class="circular-segment"></circle>'
    )
  })
})
