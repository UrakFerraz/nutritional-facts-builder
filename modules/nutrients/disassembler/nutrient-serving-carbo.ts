import { NutritionalFactsInterface } from '../../../interfaces/nutritional-facts'
import NutrientServing from './nutrient-serving'

export default class CarbohydrateServing extends NutrientServing {
  protected nutrientName = 'carbohydrate'
  static getSpecification(nutrients: NutritionalFactsInterface) {
    const nutrient = new CarbohydrateServing(nutrients)
    nutrient.setPercentageInServingSize()
    return nutrient.data
  }
}
