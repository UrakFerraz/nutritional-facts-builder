import { NutrientsVDIterator } from './main-iterator-addVD'
import { NutrientIterableInterface } from '~/interfaces/nutrient'
import { NutrientsInterface } from '~/interfaces/nutrients'
import { NutrientsIteratorInterface } from '~/interfaces/nutrients-iterator'

export class NutrientsIteratorStructure {
  private _nutrients: NutrientIterableInterface[] = []

  private iterator: NutrientsIteratorInterface = new NutrientsVDIterator(this)
  addNutrients(nutrients: NutrientsInterface): void {
    const nutrientsToArray: NutrientIterableInterface[] =
      Object.entries(nutrients)
    nutrientsToArray.forEach((nutrient) => {
      this._nutrients.push(nutrient)
    })
  }

  get nutrients() {
    return this._nutrients
  }

  get size(): number {
    return this._nutrients.length
  }

  changeIterator(iterator: NutrientsIteratorInterface) {
    this.iterator = iterator
  }

  [Symbol.iterator](): NutrientsIteratorInterface {
    this.iterator.reset()
    return this.iterator
  }
}
