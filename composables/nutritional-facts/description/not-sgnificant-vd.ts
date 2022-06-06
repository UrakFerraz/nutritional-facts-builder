import infos from './vd-infos'
import { NutrientsInterface } from '~/composables/interfaces/nutrients'
import VD from '~/static/mocks/BR_VD'

export default class NotSignificantVD {
  private _notSignificantNutrient: any[] = []

  private _notSignificantNutrientText: string | undefined = undefined
  constructor(private readonly nutrientsWithVD: NutrientsInterface) {}

  get notSignificantNutrient(): any[] {
    return this._notSignificantNutrient
  }

  get notSignificantNutrientText(): string | undefined {
    return this._notSignificantNutrientText
  }

  private findNotSignificantNutrients() {
    const nutrients = Object.entries(this.nutrientsWithVD!)
    const vd = Object.entries(VD)
    const identified = nutrients.filter((nutrient) => nutrient[1].vd < 1)
    const filtered: any[] = []
    identified.forEach((nutrient) => {
      const res = vd.filter((item) => item[0] === nutrient[0])
      if (
        this.notSignificantNutrient.some((notSign) =>
          notSign[0].includes(nutrient[0])
        )
      )
        return
      filtered.push(...res)
    })
    return filtered
  }

  setNotSignificantNutrient() {
    this._notSignificantNutrient.push(...this.findNotSignificantNutrients())
    return this
  }

  private formatText(nutrients: any[]) {
    return nutrients.reduce(
      (acc: any, nutrient: any, index: number) => {
        if (
          index === nutrients.length - 1 &&
          nutrients.length > 1
        ) {
          return acc + ' e ' + nutrient[1].name.toLowerCase() + '.'
        } else if (nutrients.length === 1) {
          return acc + ' ' + nutrient[1].name.toLowerCase() + '.'
        } else if (
          index === nutrients.length - 2 &&
          nutrients.length > 2
        ) {
          return acc + ', ' + nutrient[1].name.toLowerCase()
        } else if (index === 0) {
          return acc + ' ' + nutrient[1].name.toLowerCase()
        } else {
          return acc + ', ' + nutrient[1].name.toLowerCase()
        }
      },
      infos[0]
    )
  }

  setNotSignificantNutrientText() {
    const info = this.formatText(this.notSignificantNutrient)
    this._notSignificantNutrientText = info === infos[0] ? undefined : info
    return this
  }
}
