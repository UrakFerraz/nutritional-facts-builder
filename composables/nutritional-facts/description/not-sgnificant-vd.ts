import infos from './vd-infos'
import { NutrientsInterface } from '~/composables/interfaces/Nutrients'
import VD from '~/static/mocks/BR_VD'

export default class NotSignificantVD {
  private _notSignificantNutrient: string[] = []
  constructor(private readonly nutrientsWithVD: NutrientsInterface) {}

  get notSignificantNutrient(): string[] {
    return this._notSignificantNutrient
  }

  setNotSignificantNutrient() {
    const nutrients = Object.entries(this.nutrientsWithVD!)
    const vd = Object.entries(VD)
    const identified = nutrients.filter((nutrient) => nutrient[1].vd < 1)
    const filtered: any[] = []
    identified.forEach((nutrient) => {
      const res = vd.filter((item) => item[0] === nutrient[0])
      filtered.push(...res)
    })
    this._notSignificantNutrient = filtered || undefined
  }

  notSignificantNutrientText() {
    this.setNotSignificantNutrient()
    const info = this.notSignificantNutrient.reduce(
      (acc: any, nutrient: any, index: number) => {
        if (
          index === this.notSignificantNutrient.length - 1 &&
          this.notSignificantNutrient.length > 1
        ) {
          return acc + ' e ' + nutrient[1].name.toLowerCase() + '.'
        } else if (this.notSignificantNutrient.length === 1) {
          return acc + ' ' + nutrient[1].name.toLowerCase() + '.'
        } else if (index === this.notSignificantNutrient.length - 2) {
          return acc + ', ' + nutrient[1].name.toLowerCase()
        } else if (index === 0) {
          return acc + ' ' + nutrient[1].name.toLowerCase()
        } else {
          return acc + ', ' + nutrient[1].name
        }
      },
      infos[0]
    )
    return info === infos[0] ? undefined : info
  }
}
