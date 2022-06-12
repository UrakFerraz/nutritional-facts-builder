import { PowderInterface } from '~/composables/interfaces/powder'

export default abstract class DisassembledNutrient {
  constructor(private readonly _powder: PowderInterface) {}

  protected _data = {
    percentageInServingSize: 0,
  }

  get data() {
    return this._data
  }

  get powder() {
    return this._powder
  }

  abstract setPercentageInServingSize(): this
}
