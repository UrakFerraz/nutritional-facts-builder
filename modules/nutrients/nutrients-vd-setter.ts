import { NutrientsInterface } from '~/interfaces/nutrients'
import nutritionalValues from '~/static/mocks/nutritional-values'

export default class NutrientsVD {
  constructor(private readonly _nutrients: NutrientsInterface) {}

  get nutrients(): NutrientsInterface {
    return this._nutrients
  }

  private setVD(vd: number | undefined, source: number) {
    return vd !== undefined ? Math.round((source! * 100) / vd) : '**'
  }

  addVD() {
    const values = Object.entries(this.nutrients)
    const defaultNutriValues = Object.entries(nutritionalValues)
    for (let index = 0; index < values.length; index++) {
      const nutrients = values[index]
      defaultNutriValues.forEach((defaultNutriValue) => {
        const nutrientName = nutrients[0] as keyof NutrientsInterface
        if (nutrients[0] === defaultNutriValue[0]) {
          this._nutrients[nutrientName]!.vd = this.setVD(
            defaultNutriValue[1].value,
            nutrients[1].value
          )
        }
      })
    }
    return this
  }
}
