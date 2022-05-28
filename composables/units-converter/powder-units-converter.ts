/* eslint-disable no-console */
import { PowderInterface } from '../interfaces/powder'
import nutritionalValues from '~/static/mocks/nutritional-values'

export default class PowderUnitsConverter {
  converterConfig: { unit: string; convertion: number } = {
    unit: '',
    convertion: 0,
  }

  private readonly _to = Object.entries(nutritionalValues)
  constructor(
    private readonly _from: PowderInterface,
    private readonly _nutrientName: string
  ) {}

  get from(): PowderInterface {
    return this._from
  }

  get nutrientName() {
    return this._nutrientName
  }

  get to() {
    return this._to
  }

  convertUnit() {
    const from = this.nutrientName as keyof typeof this.from.nutrients
    console.log(this.from.nutrients[from])

    const nutrientInfo = this.to.find(
      (nutrient) => nutrient[0] === this.nutrientName
    )
    console.log(nutrientInfo)

    if (
      this.from.nutrients[from]!.unit === 'g' &&
      nutrientInfo![1].unit !== 'g'
    ) {
      if (nutrientInfo![1].unit === 'mg') {
        this.converterConfig.unit = 'mg'
        this.converterConfig.convertion =
          Number(this.from.nutrients[from]!.value) * 1_000
      }
      if (nutrientInfo![1].unit === 'mcg') {
        this.converterConfig.unit = 'mcg'
        this.converterConfig.convertion =
          Number(this.from.nutrients[from]!.value) * 1_000_000
      }
    }
    if (
      this.from.nutrients[from]!.unit === 'mg' &&
      nutrientInfo![1].unit !== 'mg'
    ) {
      if (nutrientInfo![1].unit === 'g') {
        this.converterConfig.unit = 'g'
        this.converterConfig.convertion =
          Number(this.from.nutrients[from]!.value) / 1_000
      }
      if (nutrientInfo![1].unit === 'mcg') {
        this.converterConfig.unit = 'mcg'
        this.converterConfig.convertion =
          Number(this.from.nutrients[from]!.value) * 1_000
      }
    }
    if (
      this.from.nutrients[from]!.unit === 'mcg' &&
      nutrientInfo![1].unit !== 'mcg'
    ) {
      if (nutrientInfo![1].unit === 'g') {
        this.converterConfig.unit = 'g'
        this.converterConfig.convertion =
          Number(this.from.nutrients[from]!.value) / 1_000_000
      }
      if (nutrientInfo![1].unit === 'mg') {
        this.converterConfig.unit = 'mg'
        this.converterConfig.convertion =
          Number(this.from.nutrients[from]!.value) / 1_000
      }
    }
    console.log(this.converterConfig)
  }
}
