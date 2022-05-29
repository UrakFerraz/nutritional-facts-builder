/* eslint-disable no-console */
import { PowderInterface } from '../interfaces/powder'
import { IngredientInterface } from '../interfaces/Ingredient'
import nutritionalValues from '~/static/mocks/nutritional-values'

type PowderNutrients = Pick<PowderInterface, 'nutrients'>

type Nutrients = {
  [key in keyof typeof nutritionalValues]: IngredientInterface
} // type para objetos  Destructuring

type ConverterConfig = {
  unit: string
  convertion: number
  nutrientName: string
}

export default class PowderUnitsConverter {
  readonly converterConfig: ConverterConfig[] = []

  private readonly _to = nutritionalValues
  constructor(private readonly _from: PowderNutrients) {}

  get from(): PowderNutrients {
    return this._from
  }

  get to() {
    return this._to
  }

  setConverterConfig(from: PowderNutrients, to: Nutrients, name: string) {
    const fromNutrientName = name as keyof typeof from.nutrients
    const toNutrientName = name as keyof typeof to
    if (!from.nutrients[fromNutrientName]) return
    if (
      from.nutrients[fromNutrientName]!.unit === 'g' &&
      to[toNutrientName]!.unit !== 'g'
    ) {
      if (to[toNutrientName].unit === 'mg') {
        this.converterConfig.push({
          unit: 'mg',
          nutrientName: name,
          convertion: Number(from.nutrients[fromNutrientName]!.value) * 1_000,
        })
      }
      if (to[toNutrientName].unit === 'mcg') {
        this.converterConfig.push({
          unit: 'mcg',
          nutrientName: name,
          convertion:
            Number(from.nutrients[fromNutrientName]!.value) * 1_000_000,
        })
      }
    }
    if (
      from.nutrients[fromNutrientName]!.unit === 'mg' &&
      to[toNutrientName].unit !== 'mg'
    ) {
      if (to[toNutrientName].unit === 'g') {
        this.converterConfig.push({
          unit: 'g',
          nutrientName: name,
          convertion: Number(from.nutrients[fromNutrientName]!.value) / 1_000,
        })
      }
      if (to[toNutrientName].unit === 'mcg') {
        this.converterConfig.push({
          unit: 'mcg',
          nutrientName: name,
          convertion: Number(from.nutrients[fromNutrientName]!.value) * 1_000,
        })
      }
    }
    if (
      from.nutrients[fromNutrientName]!.unit === 'mcg' &&
      to[toNutrientName].unit !== 'mcg'
    ) {
      if (to[toNutrientName].unit === 'g') {
        this.converterConfig.push({
          unit: 'g',
          nutrientName: name,
          convertion:
            Number(from.nutrients[fromNutrientName]!.value) / 1_000_000,
        })
      }
      if (to[toNutrientName].unit === 'mg') {
        this.converterConfig.push({
          unit: 'mg',
          nutrientName: name,
          convertion: Number(from.nutrients[fromNutrientName]!.value) / 1_000,
        })
      }
    }
  }

  convertUnits() {
    const to = Object.entries(this.to)
    return to.forEach((toNutrient) => {
      return this.setConverterConfig(this.from, this.to, toNutrient[0])
    })
  }
}
