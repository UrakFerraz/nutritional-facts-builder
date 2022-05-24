import { NutrientsInterface } from '../../interfaces/Nutrients'
import nutritionalValues from '../../../static/mocks/nutritional-values'
import VD from '~/static/mocks/BR_VD'

export default class NutrientsVD {
  notSignificantNutrient: any
  private _nutrientsWithVD: NutrientsInterface | null = null
  constructor(private _nutrients: NutrientsInterface) {}

  get nutrients(): NutrientsInterface {
    return this._nutrients
  }

  get nutrientsWithVD(): NutrientsInterface | null {
    return this._nutrientsWithVD
  }

  setVD(vd: number | null, source: number) {
    return vd !== null ? Math.round((source! * 100) / vd) : '**'
  }

  convertCaloriesTokJ(kJ: number) {
    return `${this.nutrients.calories.value} cal / ${Math.round(
      Number(this.nutrients.calories.value) * kJ
    )} kJ`
  }

  convertValues() {
    const values = Object.entries(this.nutrients)
    const nutriValues = Object.entries(nutritionalValues)
    const convertedValuesMap: any = {}
    for (let index = 0; index < values.length; index++) {
      const element = values[index]
      nutriValues.forEach((item) => {
        if (element[0] === item[0]) {
          if (item[0] === 'calories') {
            convertedValuesMap[element[0]] = {
              unit: element[1].unit,
              name: item[1].name,
              value: this.convertCaloriesTokJ(4.184),
              vd: this.setVD(item[1].value, element[1].value),
            }
          } else {
            convertedValuesMap[element[0]] = {
              unit: element[1].unit,
              name: item[1].name,
              value: element[1].value,
              vd: this.setVD(item[1].value, element[1].value),
            }
          }
        }
      })
    }
    this._nutrientsWithVD = convertedValuesMap
  }

  setNotSignificantNutrient() {
    const nutrients = Object.entries(this.nutrientsWithVD!)
    const vd = Object.entries(VD)
    const identified = nutrients.filter((nutrient) => nutrient[1].vd < 1)
    const filtered: any[] = []
    identified.forEach(nutrient => {
      const res = vd.filter(item => item[0] === nutrient[0])
      filtered.push(...res)
    })
    this.notSignificantNutrient = filtered || undefined
  }
}
