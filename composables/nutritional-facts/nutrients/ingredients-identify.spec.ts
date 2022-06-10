import IdentifyIngredients from './ingredients-identify'
import powders from '~/static/mocks/powders'

const identifiedMock = [
  'Acesulfame Potassium',
  'Artificial Flavor',
  'Bromelain',
  'Calcium Caseinate',
  'Cellulose Gum',
  'Corn Syrup Solids',
  'Dipotassium Phosphate',
  'Disodium Phosphate',
  'Egg Albumin',
  'Glutamine Peptides',
  'Lecithin',
  'Medium Chain Triglycerides',
  'Micellar Casein',
  'Milk Protein Isolate',
  'Nonfat Dry Milk',
  'Papain',
  'Polydextrose',
  'Salt',
  'Silicon Dioxide',
  'Sodium Caseinate',
  'Soy Lecithin',
  'Sucralose',
  'Sunflower Oil',
  'Tocopherols',
  'Tricalcium Phosphate',
  'Whey Protein Concentrate',
  'Whey Protein Isolate',
]

describe('deve identificar ingredientes', () => {
  it('deve listar ingredientes existentes', () => {
    const res = new IdentifyIngredients(powders[1].description.ingredients)
    const identified = res.identify()
    expect(identified).toEqual(identifiedMock)
  })
})
