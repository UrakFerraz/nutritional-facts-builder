import PowderDescription from './powder-description-setter'
import foodsDatabase from '~/static/mocks/foodsDatabase'
describe('deve retornar os ingredientes da descrição', () => {
  it('deve criar as classes e buscar ingredientes', () => {
    const description = new PowderDescription(foodsDatabase[1])
    expect(description).toBeDefined()
  })
})
