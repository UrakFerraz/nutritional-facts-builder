import DisassembleNutrient from './nutrient'
import powders from '~/static/mocks/powders'
describe('deve fracionar o powder', () => {
  it('deve criar a classe de fracionamento', () => {
    const sut = new DisassembleNutrient(powders[0], 'protein', 550)
    expect(sut).toBeDefined()
  })
  it('deve criar a classe de fracionamento e calcular o nutriente', () => {
    const sut = new DisassembleNutrient(powders[0], 'protein', 550)
    expect(sut).toBeDefined()
    sut.disjoin()
    const convertedMock = {
      nutrientInServingSize: 77.42,
      servingSizePrice: 7.75,
      nutrientPriceInServingSize: 6,
    }
    expect(sut.context).toEqual(convertedMock)
  })
  it('deve criar outra classe de fracionamento e calcular o nutriente', () => {
    const sut = new DisassembleNutrient(powders[1], 'protein', 630)
    expect(sut).toBeDefined()
    sut.disjoin()
    const convertedMock = {
      nutrientInServingSize: 46.81,
      servingSizePrice: 13.46,
      nutrientPriceInServingSize: 6.3,
    }
    expect(sut.context).toEqual(convertedMock)
  })
})
