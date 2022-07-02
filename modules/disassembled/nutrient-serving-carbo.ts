import { PowderInterface } from '../../interfaces/powder'
import NutrientServing from './nutrient-serving'

export default class CarbohydrateServing extends NutrientServing {
  protected nutrientName = 'carbohydrate'
  static getSpecification(nutrients: PowderInterface) {
    const nutrient = new CarbohydrateServing(nutrients)
    nutrient.setPercentageInServingSize()
    return nutrient.data
  }
}
