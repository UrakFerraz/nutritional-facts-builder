import { PowderInterface } from '../interfaces/powder'
import NutrientServing from './nutrient-serving'

export default class ProteinServing extends NutrientServing {
  protected nutrientName = 'protein'
  static getSpecification(nutrients: PowderInterface) {
    const nutrient = new ProteinServing(nutrients)
    nutrient.setPercentageInServingSize()
    return nutrient.data
  }
}
