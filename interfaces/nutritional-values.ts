import { NutrientInterface } from './nutrient'
import nutritionalValues from '~/static/mocks/nutritional-values'

export type NutritionalValuesInterface = {
  [key in keyof typeof nutritionalValues]: NutrientInterface;
}
