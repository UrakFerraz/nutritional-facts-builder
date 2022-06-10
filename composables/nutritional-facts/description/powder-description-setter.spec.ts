import PowderDescription from './powder-description-setter'
import powders from '~/static/mocks/powders'
describe('deve retornar os ingredientes da descrição', () => {
  it('deve criar as classes e buscar ingredientes', () => {
    const description = new PowderDescription(powders[1])
    expect(description).toBeDefined()
  })
})
