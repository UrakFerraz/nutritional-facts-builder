import { NutrientsIteratorStructure } from './nutrients-structure'
import nutritionalValues from '~/static/mocks/nutritional-values'
import { NutrientsIteratorInterface } from '~/interfaces/nutrients-iterator'
import { NutrientIterableInterface } from '~/interfaces/nutrient'
import { NutrientsInterface } from '~/interfaces/nutrients'

export class NutrientsVDIterator implements NutrientsIteratorInterface {
  private index = 0
  constructor(
    private readonly nutrientsStructure: NutrientsIteratorStructure
  ) {}

  iteratedNutrients: any = {}
  next(): IteratorResult<unknown> {
    const nutrientWithVD = this.makeValue(
      this.nutrientsStructure.nutrients[this.index]
    )
    this.index++
    nutrientWithVD.done = this.index >= this.nutrientsStructure.size
    return nutrientWithVD
  }

  makeValue(nutrient: NutrientIterableInterface): IteratorResult<unknown> {
    function _calculateVD() {
      const nutrientName = nutrient[0] as keyof NutrientsInterface
      const baseValue = nutritionalValues[nutrientName].value
      const vd = Math.round((Number(nutrient[1].value) * 100) / baseValue!)
      return !isNaN(vd) ? vd : '**'
    }
    return {
      value: [
        nutrient[0],
        {
          unit: nutrient[1].unit,
          value: nutrient[1].value,
          vd: _calculateVD(),
        },
      ],
      done: false,
    }
  }

  reset(): void {
    //
  }
}
