import NutrientsNamedAbstract from './nutrients-named-base'
import NutrientNamed from './nutrient-named'
import { NutrientsInterface } from '~/composables/interfaces/nutrients'
import { NutrientIterableInterface } from '~/composables/interfaces/nutrient'

export class NutrientsNamed extends NutrientsNamedAbstract {
  constructor(private _nutrients: NutrientsInterface) {
    super()
  }

  addNames() {
    const nutrientsToArray: NutrientIterableInterface[] = Object.entries(
      this.nutrients
    )
    nutrientsToArray.forEach((nutrient) => {
      const nutrientName = nutrient[0] as keyof NutrientsInterface
      const nutrientNamed = new NutrientNamed()
      nutrientNamed.addName(nutrientName, this.nutrients)
      this._nutrients[nutrientName]!.name = nutrientNamed.nutrientNamed.name
    })
    return this
  }

  get nutrients(): NutrientsInterface {
    return this._nutrients
  }
}
