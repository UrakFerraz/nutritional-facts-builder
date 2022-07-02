import NutrientNamedAbstract from './nutrient-named-base'
import nutrientsNames from '~/static/mocks/nutrients-names'
import { NutrientInterface } from '~/interfaces/nutrient'
import { NutrientsInterface } from '~/interfaces/nutrients'

export default class NutrientNamed extends NutrientNamedAbstract {
  static _nutrientNamed: NutrientInterface
  addName(nutrientName: string, nutrients: NutrientsInterface): void {
    const name = nutrientName as keyof NutrientsInterface
    const ptName = nutrientName as keyof typeof nutrientsNames
    NutrientNamed._nutrientNamed = nutrients[name]!
    NutrientNamed._nutrientNamed.name = nutrientsNames[ptName].pt
  }

  get nutrientNamed(): NutrientInterface {
    return NutrientNamed._nutrientNamed
  }
}
