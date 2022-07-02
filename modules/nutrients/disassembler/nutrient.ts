import { NutritionalFactsInterface } from '~/interfaces/nutritional-facts'

export default abstract class DisassembledNutrient {
  constructor(private readonly _powder: NutritionalFactsInterface) {}

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
