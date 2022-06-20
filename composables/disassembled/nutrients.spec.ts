import CarbohydrateServing from './nutrient-serving-carbo'
import ProteinServing from './nutrient-serving-protein'
import foodsDatabase from '~/static/mocks/foods-database'
describe('deve fracionar o powder', () => {
  it('deve criar as classes que analisa os nutrientes', () => {
    const sutCarbo = new CarbohydrateServing(foodsDatabase[0])
    expect(sutCarbo).toBeDefined()
    const sutProtein = new ProteinServing(foodsDatabase[0])
    expect(sutProtein).toBeDefined()
  })
  it('deve criar a classe e calcular o carbo', () => {
    const sutCarbo = new CarbohydrateServing(foodsDatabase[0])
    expect(sutCarbo).toBeDefined()
    sutCarbo.setPercentageInServingSize()
    const convertedMock = {
      percentageInServingSize: 12.9,
    }
    expect(sutCarbo.data).toEqual(convertedMock)
  })
  it('deve usar método estático da classe de fracionamento e calcular o carbo', () => {
    const sutCarbo = CarbohydrateServing.getSpecification(foodsDatabase[0])
    expect(sutCarbo).toBeDefined()
    const convertedMock = {
      percentageInServingSize: 12.9,
    }
    expect(sutCarbo).toEqual(convertedMock)
  })
  it('deve criar a classe e calcular proteína', () => {
    const sutProtein = new ProteinServing(foodsDatabase[0])
    expect(sutProtein).toBeDefined()
    sutProtein.setPercentageInServingSize()
    const convertedMock = {
      percentageInServingSize: 77.42,
    }
    expect(sutProtein.data).toEqual(convertedMock)
  })
  it('deve usar método estático da classe de fracionamento e calcular proteína', () => {
    const sutProtein = ProteinServing.getSpecification(foodsDatabase[0])
    expect(sutProtein).toBeDefined()
    const convertedMock = {
      percentageInServingSize: 77.42,
    }
    expect(sutProtein).toEqual(convertedMock)
  })
})
