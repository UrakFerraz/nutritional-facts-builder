import { PowderInterface } from '~/composables/interfaces/powder'

export default class DisassembledNutrient {
  constructor(
    private readonly powder: PowderInterface,
    private readonly nutrientName: string,
    private readonly powderPrice: number
  ) {}

  private _data = {
    nutrientInServingSize: 0,
    servingSizePrice: 0,
    nutrientPriceInServingSize: 0,
  }

  get data() {
    return this._data
  }

  disjoin() {
    const name = this.nutrientName as keyof typeof this.powder.nutrients
    this._data.nutrientInServingSize = Number(
      (
        (Number(this.powder.nutrients[name]!.value) * 100) /
        Number(this.powder.description.servingSize)
      ).toFixed(2)
    )
    this._data.servingSizePrice = Number(
      (
        (Number(this.powder.description.servingSize) * this.powderPrice) /
        Number(this.powder.description.size)
      ).toFixed(2)
    )
    this._data.nutrientPriceInServingSize = Number(
      (
        (Number(this.powder.nutrients[name]!.value) *
          this._data.servingSizePrice) /
        Number(this.powder.description.servingSize)
      ).toFixed(2)
    )
    return this
  }
}
