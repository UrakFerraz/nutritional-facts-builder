import { shallowMount } from '@vue/test-utils'
import NutritionalFactsTableLine from './nutritional-facts-table-line.vue'
describe('deve existir uma div line', () => {
  it('deve renderizar uma div line', () => {
    const sut = shallowMount(NutritionalFactsTableLine, {
      propsData: { type: undefined },
    })
    expect(sut.is(NutritionalFactsTableLine)).toBe(true)
    expect(sut.find('div').exists()).toBe(true)
    expect(sut.find('.nutritional-facts-table__line').exists()).toBe(true)
    expect(sut.html()).toContain(
      '<div class="nutritional-facts-table__line"></div>'
    )
  })
  it('deve renderizar uma div line nutrient', () => {
    const sut = shallowMount(NutritionalFactsTableLine, {
      propsData: { type: 'nutrient' },
    })
    expect(sut.is(NutritionalFactsTableLine)).toBe(true)
    expect(sut.find('div').exists()).toBe(true)
    expect(sut.find('.nutritional-facts-table__line--nutrient').exists()).toBe(
      true
    )
    expect(sut.html()).toContain(
      '<div class="nutritional-facts-table__line--nutrient"></div>'
    )
  })
  it('deve renderizar uma div line title', () => {
    const sut = shallowMount(NutritionalFactsTableLine, {
      propsData: { type: 'title' },
    })
    expect(sut.is(NutritionalFactsTableLine)).toBe(true)
    expect(sut.find('div').exists()).toBe(true)
    expect(sut.find('.nutritional-facts-table__line--title').exists()).toBe(
      true
    )
    expect(sut.html()).toContain(
      '<div class="nutritional-facts-table__line--title"></div>'
    )
  })
  it('deve renderizar uma div line infos', () => {
    const sut = shallowMount(NutritionalFactsTableLine, {
      propsData: { type: 'infos' },
    })
    expect(sut.is(NutritionalFactsTableLine)).toBe(true)
    expect(sut.find('div').exists()).toBe(true)
    expect(sut.find('.nutritional-facts-table__line--infos').exists()).toBe(
      true
    )
    expect(sut.html()).toContain(
      '<div class="nutritional-facts-table__line--infos"></div>'
    )
  })
})
