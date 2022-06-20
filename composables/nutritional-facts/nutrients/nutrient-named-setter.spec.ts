import NutrientNamed from './nutrient-named'
import foodsDatabase from '~/static/mocks/foodsDatabase'

describe('deve adicionar nomes nos nutrientes', () => {
  it('deve criar a classe que pega o nomedo nutriente', () => {
    const nutrientNamed = new NutrientNamed()
    expect(nutrientNamed).toBeDefined()
  })
  it('deve adicionar name ao nutriente calories', () => {
    const nutrientNamed = new NutrientNamed()
    const calories = { unit: 'kcal', value: 120, name: 'Calorias' }
    nutrientNamed.addName('calories', foodsDatabase[0].nutrients)
    expect(nutrientNamed.nutrientNamed).toMatchObject(calories)
  })
  it('deve adicionar name ao nutriente calories', () => {
    const nutrientNamed = new NutrientNamed()
    const sodium = { unit: 'mg', value: 105, name: 'Sódio' }
    nutrientNamed.addName('sodium', foodsDatabase[0].nutrients)
    expect(nutrientNamed.nutrientNamed).toMatchObject(sodium)
  })
})
