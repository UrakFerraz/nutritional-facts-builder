import { NutrientsInterface } from '../../interfaces/nutrients'
import nutritionalValues from '../../../static/mocks/nutritional-values'

export default class NutrientsVD {
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

  addVD() {
    const values = Object.entries(this.nutrients)
    const defaultNutriValues = Object.entries(nutritionalValues)
    const convertedValuesMap: any = {}
    for (let index = 0; index < values.length; index++) {
      const nutrients = values[index]
      defaultNutriValues.forEach((defaultNutriValue) => {
        if (nutrients[0] === defaultNutriValue[0]) {
          if (defaultNutriValue[0] === 'calories') {
            convertedValuesMap[nutrients[0]] = {
              unit: nutrients[1].unit,
              name: defaultNutriValue[1].name,
              value: this.convertCaloriesTokJ(4.184),
              vd: this.setVD(defaultNutriValue[1].value, nutrients[1].value),
            }
          } else {
            convertedValuesMap[nutrients[0]] = {
              unit: nutrients[1].unit,
              name: defaultNutriValue[1].name,
              value: nutrients[1].value,
              vd: this.setVD(defaultNutriValue[1].value, nutrients[1].value),
            }
          }
        }
      })
    }
    this._nutrientsWithVD = convertedValuesMap
    return this
  }
}
