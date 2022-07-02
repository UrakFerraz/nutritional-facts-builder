import { NutritionalFactsInterface } from '../../../interfaces/nutritional-facts'
import NutrientServing from './nutrient-serving'

export default class ProteinServing extends NutrientServing {
  protected nutrientName = 'protein'
  static getSpecification(nutrients: NutritionalFactsInterface) {
    const nutrient = new ProteinServing(nutrients)
    nutrient.setPercentageInServingSize()
    return nutrient.data
  }
}
