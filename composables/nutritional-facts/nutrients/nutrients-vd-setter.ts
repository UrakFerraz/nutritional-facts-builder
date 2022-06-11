import { NutrientsInterface } from '~/composables/interfaces/nutrients'
import nutritionalValues from '~/static/mocks/nutritional-values'

export default class NutrientsVD {
  private static _nutrientsWithVD: NutrientsInterface;
  constructor(private readonly _nutrients: NutrientsInterface) {}

  get nutrients(): NutrientsInterface {
    return this._nutrients
  }

  get nutrientsWithVD(): NutrientsInterface {
    return NutrientsVD._nutrientsWithVD
  }

  setVD(vd: number | undefined, source: number) {
    return vd !== undefined ? Math.round((source! * 100) / vd) : '**'
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
    NutrientsVD._nutrientsWithVD = convertedValuesMap
    return this
  }
}
