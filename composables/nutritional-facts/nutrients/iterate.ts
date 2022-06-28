import foodsDatabase from '../../../static/mocks/foods-database'
import nutritionalValues from '../../../static/mocks/nutritional-values'
import { NutrientsInterface } from '../../../composables/interfaces/nutrients'
import { NutrientInterface } from '../../../composables/interfaces/nutrient'
import nutrientsNames from '../../../static/mocks/nutrients-names'
export type NutrientIterableInterface = [string, NutrientInterface]

const nutrients = Object.entries(foodsDatabase[0].nutrients)[Symbol.iterator]()

const iteratedNutrients: any = {}

function _calculateVD(nutrient: NutrientIterableInterface) {
  const nutrientName = nutrient[0] as keyof NutrientsInterface
  const baseValue = nutritionalValues[nutrientName].value
  const vd = Math.round((Number(nutrient[1].value) * 100) / baseValue!)
  return !isNaN(vd) ? vd : '**'
}

function _getName(nutrient: NutrientIterableInterface) {
  const nutrientName = nutrient[0] as keyof typeof nutrientsNames
  return nutrientsNames[nutrientName].pt
}

function nutrientBuilder(nutrient: NutrientIterableInterface) {
  return {
    next() {
      return {
        value: [
          nutrient[0],
          {
            unit: nutrient[1].unit,
            value: nutrient[1].value,
            vd: _calculateVD(nutrient),
            name: _getName(nutrient),
          },
        ],
        done: false,
      }
    },
  }
}

for (const nutrient of nutrients) {
  const data = nutrientBuilder(nutrient).next().value
  const nutrientName = data[0] as keyof NutrientsInterface
  iteratedNutrients[nutrientName] = data[1]
}
