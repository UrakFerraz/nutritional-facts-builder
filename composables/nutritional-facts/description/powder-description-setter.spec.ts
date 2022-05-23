import IdentifyIngredients from '../nutrients/ingredients-identify'
import PowderDescription from './powder-description-setter'
import wheyProtein from '~/static/mocks/whey-protein-mock'
describe('deve retornar os ingredientes da descrição', () => {
  it('deve criar as classes e buscar ingredientes', () => {
    const description = new PowderDescription(wheyProtein[1].description)
    const identified = [
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
    description.contains = new IdentifyIngredients(
      wheyProtein[1].description.ingredients
    )
    expect(description.getContains()).toEqual(identified)
  })
})
