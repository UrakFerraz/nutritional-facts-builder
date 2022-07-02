import { NutritionalFactsBuilder } from './nutritional-facts-builder'
import foodsDatabase from '~/static/mocks/foods-database'

const wheyMock = {
  powder: {
    id: 1,
    description: {
      name: 'GOLD STANDARD 100% WHEY PROTEIN',
      brand: 'OPTIMUM NUTRITION',
      category: 'protein',
      subCategory: 'whey protein',
      flavor: 'Vanilla Ice Cream',
      size: 2200,
      servingSize: 31,
      contains: 'Milk ans soy',
    },
    ingredients:
      'Protein Blend (Whey Protein Isolate, Whey Protein Concentrate, Whey Peptides), Natural And Artificial Flavor, Lecithin, Salt, Acesulfame Potassium, Sucralose, Lactase.',
    nutrients: {
      calories: { unit: 'kcal', value: 120 },
      carbohydrate: { unit: 'g', value: 4 },
      protein: { unit: 'g', value: 24 },
      totalFat: { unit: 'g', value: 1 },
      saturatedFat: { unit: 'g', value: 0.5 },
      transFat: { unit: 'g', value: 0 },
      sodium: { unit: 'mg', value: 105 },
    },
  },
}

const wheyMockChanged = {
  id: 1,
  nutrients: {
    calories: {
      unit: 'kcal',
      name: 'Calorias',
      value: 120,
      vd: 6,
    },
    carbohydrate: { unit: 'g', name: 'Carboidrato', value: 4, vd: 1 },
    protein: { unit: 'g', name: 'Proteínas', value: 24, vd: 32 },
    totalFat: { unit: 'g', name: 'Gorduras Totais', value: 1, vd: 2 },
    saturatedFat: { unit: 'g', name: 'Gorduras Saturadas', value: 0.5, vd: 2 },
    transFat: { unit: 'g', name: 'Gorduras Trans', value: 0, vd: '**' },
    sodium: { unit: 'mg', name: 'Sódio', value: 105, vd: 5 },
  },
  description: {
    name: 'GOLD STANDARD 100% WHEY PROTEIN',
    brand: 'OPTIMUM NUTRITION',
    category: 'protein',
    subCategory: 'whey protein',
    flavor: 'Vanilla Ice Cream',
    size: 2200,
    servingSize: 31,
    contains: 'Milk ans soy',
  },
  ingredients:
    'Protein Blend (Whey Protein Isolate, Whey Protein Concentrate, Whey Peptides), Natural And Artificial Flavor, Lecithin, Salt, Acesulfame Potassium, Sucralose, Lactase.',
}
describe('deve converter a whey para valores com VD', () => {
  it('deve existir a classe de converter', () => {
    const whey = foodsDatabase[0]
    const sut = new NutritionalFactsBuilder(whey).main()
    expect(sut).toBeDefined()
  })
  it('deve existir vd na whey convertida', () => {
    const whey = foodsDatabase[0]
    const sut = new NutritionalFactsBuilder(whey).main()
    expect(sut.nutrients!.transFat.vd).toBe('**')
  })
  it('deve converter powder', () => {
    const whey = foodsDatabase[0]
    const sut = new NutritionalFactsBuilder(whey).main()
    expect(sut).toMatchObject(wheyMock)
  })
  it('deve retornar o powder tratado', () => {
    const whey = foodsDatabase[0]
    const sut = new NutritionalFactsBuilder(whey).main()
    expect(sut.getNutritionalFacts()).toMatchObject(wheyMockChanged)
  })
})
