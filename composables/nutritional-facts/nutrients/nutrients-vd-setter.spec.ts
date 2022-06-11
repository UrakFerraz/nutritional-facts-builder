import NutrientsVD from './nutrients-vd-setter'
import powders from '~/static/mocks/powders'

const nutrientsWithVdMock = {
  calories: {
    unit: 'kcal',
    name: 'Calorias',
    value: '200 kcal / 837 kJ',
    vd: 10,
  },
  carbohydrate: { unit: 'g', name: 'Carboidrato', value: 15, vd: 5 },
  protein: { unit: 'g', name: 'Proteínas', value: 22, vd: 29 },
  totalFat: { unit: 'g', name: 'Gorduras Totais', value: 6, vd: 11 },
  saturatedFat: { unit: 'g', name: 'Gorduras Saturadas', value: 2, vd: 9 },
  transFat: { unit: 'g', name: 'Gorduras Trans', value: 0, vd: '**' },
  sodium: { unit: 'mg', name: 'Sódio', value: 22, vd: 1 },
  dietaryFibers: { unit: 'g', name: 'Fibra Alimentar', value: 1, vd: 4 },
  calcium: { unit: 'mg', name: 'Cálcio', value: 150, vd: 15 },
  cholesterol: { unit: 'mg', name: 'Colesterol', value: 55, vd: 18 },
  potassium: { unit: 'mg', name: 'Potássio', value: 3, vd: '**' },
  iron: { unit: 'mg', name: 'Ferro', value: 0.011, vd: 0 },
  phosphorus: { unit: 'mg', name: 'Fósforo', value: 150, vd: 21 },
  magnesium: { unit: 'mg', name: 'Magnésio', value: 24, vd: 9 },
}

describe('deve adicionar vd', () => {
  it('deve adicionar vd no powder', () => {
    const nutrients = new NutrientsVD(powders[1].nutrients).addVD()
    expect(nutrients.nutrientsWithVD).toEqual(nutrientsWithVdMock)
  })
})
