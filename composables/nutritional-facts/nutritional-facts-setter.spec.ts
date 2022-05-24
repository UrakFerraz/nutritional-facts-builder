/* eslint-disable no-console */
import wheyProtein from '../../static/mocks/whey-protein-mock'
import PowderDescription from './description/powder-description-setter'
import NutrientsVD from './nutrients/nutrients-vd-setter'
import { PowderNutritionalFacts } from './powder/nutritional-facts-setter'

describe('deve converter a whey para valores com VD', () => {
  it('deve existir a classe de converter', () => {
    const whey = wheyProtein[0]
    const nutrients = new NutrientsVD(whey.nutrients)
    const description = new PowderDescription(whey.description)
    const mock = new PowderNutritionalFacts(whey, nutrients, description)
    expect(mock).toBeDefined()
    expect(mock.powder).toEqual(wheyProtein[0])
  })
  it('deve existir vd n a whey convertida', () => {
    const whey = wheyProtein[0]
    const nutrients = new NutrientsVD(whey.nutrients)
    const description = new PowderDescription(whey.description)
    const mock = new PowderNutritionalFacts(whey, nutrients, description)
    mock.setPowderWithVD()
    expect(mock.powderWithVD.nutrients.transFat.vd).toBe('**')
  })
  it('deve existir ingredients na whey convertida', () => {
    const whey = wheyProtein[0]
    const nutrients = new NutrientsVD(whey.nutrients)
    const description = new PowderDescription(whey.description)
    const mock = new PowderNutritionalFacts(whey, nutrients, description)
    mock.setPowderWithVD()
    expect(mock.powder.description.ingredients).toBe(
      whey.description.ingredients
    )
  })
  it('deve verificar nutrientes em quantidade não significante', () => {
    const filtered = [ [ 'dietaryFibers', { grams: 25, name: 'Fibra Alimentar' } ] ]
    const whey = wheyProtein[0]
    const nutrients = new NutrientsVD(whey.nutrients)
    const description = new PowderDescription(whey.description)
    const mock = new PowderNutritionalFacts(whey, nutrients, description)
    mock.setPowderWithVD()
    mock.setNotSignificantNutrient()
    expect(mock.powder.description.ingredients).toEqual(whey.description.ingredients)
    expect(mock.nutrients.notSignificantNutrient).toEqual(filtered)
  })
})
