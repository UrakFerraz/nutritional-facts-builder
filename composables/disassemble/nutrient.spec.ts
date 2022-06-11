import DisassembleNutrient from './nutrient'
import powders from '~/static/mocks/powders'
describe('deve fracionar o powder', () => {
  it('deve criar a classe de fracionamento', () => {
    const sut = new DisassembleNutrient(powders[0], 'protein')
    expect(sut).toBeDefined()
  })
  it('deve criar a classe de fracionamento e calcular o nutriente', () => {
    const sut = new DisassembleNutrient(powders[0], 'protein')
    expect(sut).toBeDefined()
    sut.disjoin()
    const convertedMock = {
      nutrientInServingSize: 77.42,
    }
    expect(sut.data).toEqual(convertedMock)
  })
  it('deve criar outra classe de fracionamento e calcular o nutriente', () => {
    const sut = new DisassembleNutrient(powders[1], 'protein')
    expect(sut).toBeDefined()
    sut.disjoin()
    const convertedMock = {
      nutrientInServingSize: 46.81,
    }
    expect(sut.data).toEqual(convertedMock)
  })
})
