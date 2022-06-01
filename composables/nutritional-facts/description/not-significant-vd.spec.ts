import NotSignificantVD from './not-sgnificant-vd'
const nutrientsWithVdMock = {
  transFat: { unit: 'g', name: 'Gorduras Trans', value: 0, vd: '**' },
  calories: {
    unit: 'kcal',
    name: 'Calorias',
    value: '200 cal / 837 kJ',
    vd: 10,
  },
  totalFat: { unit: 'g', name: 'Gorduras Totais', value: 6, vd: 11 },
  saturatedFat: { unit: 'g', name: 'Gorduras Saturadas', value: 2, vd: 0 },
  cholesterol: { unit: 'mg', name: 'Colesterol', value: 55, vd: 18 },
  sodium: { unit: 'mg', name: 'Sódio', value: 22, vd: 0 },
  carbohydrate: { unit: 'g', name: 'Carboidrato', value: 15, vd: 5 },
  dietaryFibers: { unit: 'g', name: 'Fibra Alimentar', value: 1, vd: 0 },
  protein: { unit: 'g', name: 'Proteínas', value: 22, vd: 29 },
  calcium: { unit: 'mg', name: 'Cálcio', value: 150, vd: 15 },
  potassium: { unit: 'mg', name: 'Potássio', value: 3, vd: 64 },
  iron: { unit: 'mg', name: 'Ferro', value: 0.011, vd: 0 },
  phosphorus: { unit: 'mg', name: 'Fósforo', value: 150, vd: 21 },
  magnesium: { unit: 'mg', name: 'Magnésio', value: 24, vd: 0 },
}

const notSignificantMock = [
  ['saturatedFat', { grams: 22, name: 'Gorduras Saturadas' }],
  ['sodium', { mg: 2400, name: 'Sódio' }],
  ['dietaryFibers', { grams: 25, name: 'Fibra Alimentar' }],
]

describe('deve procurar valores não significativos', () => {
  it('deve guardar valores não significativos', () => {
    const mock = new NotSignificantVD(nutrientsWithVdMock)
    mock.setNotSignificantNutrient()
    expect(mock.notSignificantNutrient).toEqual(notSignificantMock)
    expect(JSON.stringify(mock.notSignificantNutrient)).toBe(
      JSON.stringify(notSignificantMock)
    )
  })
  it('deve criar frase para tabela nutricional', () => {
    const mock = new NotSignificantVD(nutrientsWithVdMock)
    mock.setNotSignificantNutrient()
    expect(mock.notSignificantNutrientText()).toEqual(
      'Não contém quantidades significativas de gorduras saturadas, sódio e fibra alimentar.'
    )
  })
})
