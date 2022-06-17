import { NutrientsNamed } from './nutrients-named'
import powders from '~/static/mocks/powders'
describe('deve criar adicionar nomes dos nutrientes ao todos os nutrientes', () => {
  it('deve instanciar a classe que adicipona nomes', () => {
    const nutrientsNamed = new NutrientsNamed(powders[0].nutrients)
    nutrientsNamed.addNames()
    const nutrientsMock = {
      _nutrients: {
        calories: { unit: 'kcal', value: 120, name: 'Calorias' },
        carbohydrate: { unit: 'g', value: 4, name: 'Carboidrato' },
        protein: { unit: 'g', value: 24, name: 'Proteínas' },
        totalFat: { unit: 'g', value: 1, name: 'Gorduras Totais' },
        saturatedFat: { unit: 'g', value: 0.5, name: 'Gorduras Saturadas' },
        transFat: { unit: 'g', value: 0, name: 'Gorduras Trans' },
        dietaryFibers: { unit: 'g', value: 0, name: 'Fibra Alimentar' },
        sodium: { unit: 'mg', value: 105, name: 'Sódio' },
        cholesterol: { unit: 'mg', value: 0.035, name: 'Colesterol' },
      },
    }
    expect(JSON.stringify(nutrientsNamed)).toEqual(
      JSON.stringify(nutrientsMock)
    )
  })
})
