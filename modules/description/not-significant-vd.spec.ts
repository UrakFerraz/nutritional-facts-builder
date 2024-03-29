import NotSignificantVD from './not-sgnificant-vd'
const nutrientsWithVdMock = {
  calories: {
    unit: 'kcal',
    name: 'Calorias',
    value: 200,
    vd: 10,
  },
  carbohydrate: { unit: 'g', name: 'Carboidrato', value: 15, vd: 5 },
  protein: { unit: 'g', name: 'Proteínas', value: 22, vd: 29 },
  totalFat: { unit: 'g', name: 'Gorduras Totais', value: 6, vd: 11 },
  saturatedFat: { unit: 'g', name: 'Gorduras Saturadas', value: 2, vd: 0 },
  transFat: { unit: 'g', name: 'Gorduras Trans', value: 0, vd: '**' },
  dietaryFibers: { unit: 'g', name: 'Fibra Alimentar', value: 1, vd: 0 },
  sodium: { unit: 'mg', name: 'Sódio', value: 22, vd: 0 },
  calcium: { unit: 'mg', name: 'Cálcio', value: 150, vd: 15 },
  cholesterol: { unit: 'mg', name: 'Colesterol', value: 55, vd: 18 },
  potassium: { unit: 'mg', name: 'Potássio', value: 3, vd: 64 },
  iron: { unit: 'mg', name: 'Ferro', value: 0.011, vd: 0 },
  phosphorus: { unit: 'mg', name: 'Fósforo', value: 150, vd: 21 },
  magnesium: { unit: 'mg', name: 'Magnésio', value: 24, vd: 0 },
}

const notSignificantMock = [
  ['saturatedFat', { unit: 'g', value: 22, name: 'Gorduras Saturadas' }],
  ['dietaryFibers', { unit: 'g', value: 25, name: 'Fibra Alimentar' }],
  ['sodium', { unit: 'g', value: 2000, name: 'Sódio' }],
]

describe('deve procurar valores não significativos', () => {
  it('deve guardar valores não significativos', () => {
    const sut = new NotSignificantVD(
      nutrientsWithVdMock
    ).setNotSignificantNutrient()
    expect(sut.notSignificantNutrient).toEqual(notSignificantMock)
    expect(sut.notSignificantNutrient).toMatchObject(notSignificantMock)
  })
  it('deve criar frase para tabela nutricional', () => {
    const sut = new NotSignificantVD(nutrientsWithVdMock)
      .setNotSignificantNutrient()
      .createNotSignificantNutrientText()
    expect(sut.notSignificantNutrientText).toEqual(
      'Não contém quantidades significativas de gorduras saturadas, fibra alimentar e sódio.'
    )
  })
})
