import PowderDescription from './powder-description-setter'
import wheyProtein from '~/static/mocks/whey-protein-mock'
describe('deve retornar os ingredientes da descrição', () => {
  it('deve criar as classes e buscar ingredientes', () => {
    const description = new PowderDescription(wheyProtein[1])
    expect(description).toBeDefined()
  })
})
