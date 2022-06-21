import PowderDescription from './powder-description-setter'
import foodsDatabase from '~/static/mocks/foods-database'

const data = {
  _powder: {
    id: 2,
    description: {
      name: 'SYNTHA-6 WHEY PROTEIN POWDER',
      brand: 'BSN',
      category: 'protein',
      subCategory: 'whey protein',
      flavor: 'Vanilla Ice Cream',
      size: 2200,
      servingSize: 47,
      infos: [
        '',
        '(*) % Valores Diários de referência com base em uma dieta de 2.000kcal ou 8.400kJ. Seus valores diários podem ser maiores ou menores, dependendo das suas necessidades energéticas',
        '(**) Valores diários não estabelecidos.',
      ],
      contains: 'Egg, Milk, Soy, and Wheat.',
    },
    ingredients:
      'Protein Matrix comprised of (Whey Protein Concentrate, Whey Protein Isolate, Calcium Caseinate, Micellar Casein, Milk Protein Isolate, Egg Albumin, Glutamine Peptides), Polydextrose, Sunflower Creamer (Sunflower Oil, Corn Syrup Solids, Sodium Caseinate, Mono- And Diglycerides, Dipotassium Phosphate, Tricalcium Phosphate, Soy Lecithin, Tocopherols), Natural and Artificial Flavor, MCT Powder (Medium Chain Triglycerides, Nonfat Dry Milk, Disodium Phosphate, Silicon Dioxide), Lecithin, Cellulose Gum, Salt, Yellow 5, Sucralose, Acesulfame Potassium, Papain, Bromelain.',
    nutrients: {
      calories: { unit: 'kcal', value: 200 },
      carbohydrate: { unit: 'g', value: 15 },
      protein: { unit: 'g', value: 22 },
      totalFat: { unit: 'g', value: 6 },
      saturatedFat: { unit: 'g', value: 2 },
      transFat: { unit: 'g', value: 0 },
      dietaryFibers: { unit: 'g', value: 1 },
      sodium: { unit: 'mg', value: 22 },
      calcium: { unit: 'mg', value: 150 },
      cholesterol: { unit: 'mg', value: 55 },
      iron: { unit: 'mg', value: 0.011 },
      potassium: { unit: 'mg', value: 3 },
      phosphorus: { unit: 'mg', value: 150 },
      magnesium: { unit: 'mg', value: 24 },
    },
  },
}
describe('deve retornar os ingredientes da descrição', () => {
  it('deve criar as classes e buscar ingredientes', () => {
    const sut = new PowderDescription(foodsDatabase[1])
    expect(sut).toBeDefined()
  })
  it('deve adicionar description no atributo estático', () => {
    const sut = new PowderDescription(foodsDatabase[1])
    sut.main()
    expect(sut).toMatchObject(data)
  })
})
