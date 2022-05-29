import NutrientsVD from './nutrients-vd-setter'
import wheyProtein from '~/static/mocks/whey-protein-mock'
import wrongValuesWheyProtein from '~/static/mocks/wrong-values-whey'

const nutrientsWithVdMock = {
  transFat: { unit: 'g', name: 'Gorduras Trans', value: 0, vd: '**' },
  calories: {
    unit: 'kcal',
    name: 'Calorias',
    value: '200 cal / 837 kJ',
    vd: 10,
  },
  totalFat: { unit: 'g', name: 'Gorduras Totais', value: 6, vd: 11 },
  saturatedFat: { unit: 'g', name: 'Gorduras Saturadas', value: 2, vd: 9 },
  cholesterol: { unit: 'mg', name: 'Colesterol', value: 55, vd: 18 },
  sodium: { unit: 'mg', name: 'Sódio', value: 22, vd: 1 },
  carbohydrate: { unit: 'g', name: 'Carboidrato', value: 15, vd: 5 },
  dietaryFibers: { unit: 'g', name: 'Fibras', value: 1, vd: 4 },
  protein: { unit: 'g', name: 'Proteínas', value: 22, vd: 29 },
  calcium: { unit: 'mg', name: 'Cálcio', value: 150, vd: 15 },
  potassium: { unit: 'mg', name: 'Potássio', value: 3, vd: 64 },
  iron: { unit: 'mg', name: 'Ferro', value: 0.011, vd: 0 },
  phosphorus: { unit: 'mg', name: 'Fósforo', value: 150, vd: 21 },
  magnesium: { unit: 'mg', name: 'Magnésio', value: 24, vd: 9 },
}

const notSignificantValuesMock = [
  ['totalFat', { grams: 55, name: 'Gorduras Totais' }],
  ['saturatedFat', { grams: 22, name: 'Gorduras Saturadas' }],
  ['carbohydrate', { grams: 300, name: 'Carboidrato' }],
  ['dietaryFibers', { grams: 25, name: 'Fibra Alimentar' }],
]

describe('deve adicionar vd', () => {
  it('deve adicionar vd no powder', () => {
    const nutrients = new NutrientsVD(wheyProtein[1].nutrients)
    nutrients.addVD()
    expect(nutrients.nutrientsWithVD).toEqual(nutrientsWithVdMock)
    nutrients.setNotSignificantNutrient()
  })
  it('deve criar frese de valores não significativos', () => {
    const nutrients = new NutrientsVD(wrongValuesWheyProtein.nutrients)
    nutrients.addVD()
    nutrients.setNotSignificantNutrient()
    expect(nutrients.notSignificantNutrient).toEqual(notSignificantValuesMock)
  })
})
