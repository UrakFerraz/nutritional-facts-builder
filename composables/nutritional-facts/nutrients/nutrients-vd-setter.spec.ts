import NutrientsVD from './nutrients-vd-setter'
import powders from '~/static/mocks/powders'

const nutrientsWithVdMock = {
  calories: {
    unit: 'kcal',
    value: 200,
    vd: 10,
  },
  carbohydrate: { unit: 'g', value: 15, vd: 5 },
  protein: { unit: 'g', value: 22, vd: 29 },
  totalFat: { unit: 'g', value: 6, vd: 11 },
  saturatedFat: { unit: 'g', value: 2, vd: 9 },
  transFat: { unit: 'g', value: 0, vd: '**' },
  sodium: { unit: 'mg', value: 22, vd: 1 },
  dietaryFibers: { unit: 'g', value: 1, vd: 4 },
  calcium: { unit: 'mg', value: 150, vd: 15 },
  cholesterol: { unit: 'mg', value: 55, vd: 18 },
  potassium: { unit: 'mg', value: 3, vd: '**' },
  iron: { unit: 'mg', value: 0.011, vd: 0 },
  phosphorus: { unit: 'mg', value: 150, vd: 21 },
  magnesium: { unit: 'mg', value: 24, vd: 9 },
}

describe('deve adicionar vd', () => {
  it('deve adicionar vd no powder', () => {
    const sut = new NutrientsVD(powders[1].nutrients).addVD()
    expect(sut.nutrients).toEqual(nutrientsWithVdMock)
  })
})
