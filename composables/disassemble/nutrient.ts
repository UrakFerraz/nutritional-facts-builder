import { PowderInterface } from '~/composables/interfaces/powder'

export default class DisassembledNutrient {
  constructor(
    private readonly powder: PowderInterface,
    private readonly nutrientName: string
  ) {}

  private _data = {
    nutrientInServingSize: 0,
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
    return this
  }
}
