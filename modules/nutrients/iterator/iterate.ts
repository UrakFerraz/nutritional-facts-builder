import nutritionalValues from '../../../static/mocks/nutritional-values'
import { NutrientsInterface } from '../../../interfaces/nutrients'
import { NutrientIterableInterface } from '../../../interfaces/nutrient'
import nutrientsNames from '../../../static/mocks/nutrients-names'

export default class NutrientsIterator {
  static iteratedNutrients: any = {}

  private _nutrients: NutrientsInterface | null = null
  get nutrients() {
    return this._nutrients
  }

  nutrientBuilder(nutrient: NutrientIterableInterface) {
    const _calculateVD = () => {
      const nutrientName = nutrient[0] as keyof NutrientsInterface
      const baseValue = nutritionalValues[nutrientName].value
      const vd = Math.round((Number(nutrient[1].value) * 100) / baseValue!)
      return !isNaN(vd) ? vd : '**'
    }
    const _getName = () => {
      const nutrientName = nutrient[0] as keyof typeof nutrientsNames
      return nutrientsNames[nutrientName].pt
    }
    return {
      next() {
        return {
          value: [
            nutrient[0],
            {
              unit: nutrient[1].unit,
              value: nutrient[1].value,
              vd: _calculateVD(),
              name: _getName(),
            },
          ],
          done: false,
        }
      },
    }
  }

  static editNutrients(nutrients: NutrientsInterface) {
    const Iterated = new NutrientsIterator()
    Iterated._nutrients = nutrients
    const iterableNutrients = Object.entries(Iterated._nutrients)[
      Symbol.iterator
    ]()
    for (const nutrient of iterableNutrients) {
      const data = Iterated.nutrientBuilder(nutrient).next().value
      const nutrientName = data[0] as keyof NutrientsInterface
      NutrientsIterator.iteratedNutrients[nutrientName] = data[1]
    }
    return this
  }
}
