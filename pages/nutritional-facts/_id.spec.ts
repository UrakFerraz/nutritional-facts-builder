import { shallowMount } from '@vue/test-utils'
import { renderToString } from '@vue/server-test-utils'
import _idVue from './_id.vue'
describe('deve inicializar a página de tabela nutricional', () => {
  it('deve existir um html', () => {
    const sut = shallowMount(_idVue, {
      mocks: {
        $nuxt: {
          $route: { params: { id: 1 } },
        },
      },
    })
    expect(sut.html()).toContain('table')
    expect(sut.is(_idVue)).toBe(true)
  })
  it('deve existir uma div', () => {
    const sut = shallowMount(_idVue, {
      mocks: {
        $nuxt: {
          $route: { params: { id: 1 } },
        },
      },
    })
    expect(sut.contains('div')).toBe(true)
  })
  it('deve renderizar a página de tabela nutricional', async () => {
    const sut = await renderToString(_idVue, {
      mocks: {
        $nuxt: {
          $route: { params: { id: 1 } },
        },
      },
    })
    expect(sut).toEqual(
      '<div data-server-rendered="true"><ChartsGrid nutrients="[object Object]"></ChartsGrid> <NutritionalFactsTable nutritional-facts="[object Object]"></NutritionalFactsTable></div>'
    )
  })
})
