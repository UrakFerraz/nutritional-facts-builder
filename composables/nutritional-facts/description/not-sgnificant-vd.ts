import infos from './vd-infos'
import { NutrientsInterface } from '~/composables/interfaces/nutrients'
import VD from '~/static/mocks/BR_VD'
import { NutrientInterface } from '~/composables/interfaces/nutrient'

type NotSignificantNutrients = [string, NutrientInterface]

export default class NotSignificantVD {
  private readonly _notSignificantNutrients: NotSignificantNutrients[] = []
  private static _notSignificantNutrientText: string
  constructor(private readonly nutrientsWithVD: NutrientsInterface) {}

  get notSignificantNutrient() {
    return this._notSignificantNutrients
  }

  get notSignificantNutrientText(): string {
    return NotSignificantVD._notSignificantNutrientText
  }

  private findNotSignificantNutrients() {
    const nutrients: NotSignificantNutrients[] = Object.entries(
      this.nutrientsWithVD
    )
    const vd = Object.entries(VD)
    const identified = nutrients.filter((nutrient) => nutrient[1].vd! < 1)
    return identified.reduce(
      (
        filtered: NotSignificantNutrients[],
        nutrient: NotSignificantNutrients
      ) => {
        const res = vd.filter((item) => item[0] === nutrient[0])
        if (
          !this.notSignificantNutrient.some((notSign) =>
            notSign[0].includes(nutrient[0])
          )
        ) {
          filtered.push(...res)
        }
        return filtered
      },
      []
    )
  }

  setNotSignificantNutrient() {
    this._notSignificantNutrients.push(...this.findNotSignificantNutrients())
    return this
  }

  private formatText(nutrients: NotSignificantNutrients[]) {
    return nutrients.reduce(
      (acc: string, nutrient: NotSignificantNutrients, index: number) => {
        if (index === nutrients.length - 1 && nutrients.length > 1) {
          return acc + ' e ' + nutrient[1].name!.toLowerCase() + '.'
        } else if (nutrients.length === 1) {
          return acc + ' ' + nutrient[1].name!.toLowerCase() + '.'
        } else if (index === nutrients.length - 2 && nutrients.length > 2) {
          return acc + ', ' + nutrient[1].name!.toLowerCase()
        } else if (index === 0) {
          return acc + ' ' + nutrient[1].name!.toLowerCase()
        } else {
          return acc + ', ' + nutrient[1].name!.toLowerCase()
        }
      },
      infos[0]
    )
  }

  createNotSignificantNutrientText() {
    NotSignificantVD._notSignificantNutrientText = this.formatText(
      this.notSignificantNutrient
    )
    return this
  }
}
