import { NutrientsInterface } from '../../interfaces/nutrients'
import DisassembledNutrient from './nutrient'

export default abstract class NutrientServing extends DisassembledNutrient {
  protected abstract nutrientName: string
  setPercentageInServingSize() {
    const name = this.nutrientName as keyof NutrientsInterface
    this._data.percentageInServingSize = Number(
      (
        (Number(this.powder.nutrients[name]!.value) * 100) /
        Number(this.powder.description.servingSize)
      ).toFixed(2)
    )
    return this
  }
}
