/* eslint-disable no-console */
import wheyProtein from '../../static/mocks/whey-protein-mock'
import NutrientsVD from './nutrients/nutrients-vd-setter'
import { PowderNutritionalFacts } from './powder/nutritional-facts-setter'

describe('deve converter a whey para valores com VD', () => {
  it('deve existir a classe de converter', () => {
    const whey = wheyProtein[0]
    const nutrients = new NutrientsVD(whey.nutrients)
    const mock = new PowderNutritionalFacts(whey, nutrients)
    expect(mock).toBeDefined()
    expect(mock.powder).toEqual(wheyProtein[0])
  })
  it('deve existir vd n a whey convertida', () => {
    const whey = wheyProtein[0]
    const nutrients = new NutrientsVD(whey.nutrients)
    const mock = new PowderNutritionalFacts(whey, nutrients)
    mock.setPowderWithVD()
    expect(mock.powderWithVD.nutrients.transFat.vd).toBe('**')
    console.log(mock)
  })
  it('deve existir ingredients n a whey convertida', () => {
    const whey = wheyProtein[0]
    const nutrients = new NutrientsVD(whey.nutrients)
    const mock = new PowderNutritionalFacts(whey, nutrients)
    mock.setPowderWithVD()
    expect(mock.powder.description.ingredients).toBe(
      whey.description.ingredients
    )
    console.log(mock)
  })
})
