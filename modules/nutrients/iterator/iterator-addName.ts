import nutrientsNames from '../../../../static/mocks/nutrients-names'
import { NutrientsIteratorStructure } from './nutrients-structure'
import { NutrientsIteratorInterface } from '~/interfaces/nutrients-iterator'
import { NutrientIterableInterface } from '~/interfaces/nutrient'

export class NutrientsNameIterator implements NutrientsIteratorInterface {
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
    function getName() {
      const nutrientName = nutrient[0] as keyof typeof nutrientsNames
      return nutrientsNames[nutrientName].pt
    }
    return {
      value: [
        nutrient[0],
        {
          unit: nutrient[1].unit,
          value: nutrient[1].value,
          vd: nutrient[1].value,
          name: getName(),
        },
      ],
      done: false,
    }
  }

  reset(): void {
    //
  }
}
