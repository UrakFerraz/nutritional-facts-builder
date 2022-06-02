import { PowderInterface } from '~/composables/interfaces/powder'

export default class NutrientDisassemble {
  constructor(
    private readonly powder: PowderInterface,
    private readonly nutrientName: string,
    private readonly powderPrice: number
  ) {}

  private _context = {
    nutrientInServingSize: 0,
    servingSizePrice: 0,
    nutrientPriceInServingSize: 0,
  }

  get context() {
    return this._context
  }

  disjoin() {
    const name = this.nutrientName as keyof typeof this.powder.nutrients
    this._context.nutrientInServingSize = Number(
      (
        (Number(this.powder.nutrients[name]!.value) * 100) /
        Number(this.powder.description.servingSize)
      ).toFixed(2)
    )
    this._context.servingSizePrice = Number(
      (
        (Number(this.powder.description.servingSize) * this.powderPrice) /
        Number(this.powder.description.size)
      ).toFixed(2)
    )
    this._context.nutrientPriceInServingSize = Number(
      (
        (Number(this.powder.nutrients[name]!.value) *
          this._context.servingSizePrice) /
        Number(this.powder.description.servingSize)
      ).toFixed(2)
    )
  }
}
