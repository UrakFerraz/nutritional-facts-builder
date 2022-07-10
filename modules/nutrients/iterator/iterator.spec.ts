/* eslint-disable no-console */
import foodsDatabase from '../../../static/mocks/foods-database'
import NutrientsIterator from './iterate'

const nutrientsMock = [
  ['calories', { unit: 'kcal', value: 120, vd: 6, name: 'Calorias' }],
  ['carbohydrate', { unit: 'g', value: 4, vd: 1, name: 'Carboidrato' }],
  ['protein', { unit: 'g', value: 24, vd: 32, name: 'Proteínas' }],
  ['totalFat', { unit: 'g', value: 1, vd: 2, name: 'Gorduras Totais' }],
  [
    'saturatedFat',
    { unit: 'g', value: 0.5, vd: 2, name: 'Gorduras Saturadas' },
  ],
  ['transFat', { unit: 'g', value: 0, vd: '**', name: 'Gorduras Trans' }],
  ['dietaryFibers', { unit: 'g', value: 0, vd: 0, name: 'Fibra Alimentar' }],
  ['sodium', { unit: 'mg', value: 105, vd: 5, name: 'Sódio' }],
  [
    'cholesterol',
    {
      name: 'Colesterol',
      unit: 'mg',
      value: 0.035,
      vd: 0,
    },
  ],
]

describe('deve usar o iterator para adicionar coisas nos nutrientes', () => {
  it('deve carregar a classe sut e adicionar nutrientes', () => {
    const sut = Object.entries(
      NutrientsIterator.editNutrients(foodsDatabase[0].nutrients)
        .iteratedNutrients
    )
    expect(sut).toMatchObject(nutrientsMock)
  })
})
