import nutritionalValues from '../../static/mocks/nutritional-values'
import { WheyProteinProtocol } from '../interfaces/whey-protein-protocol'
export class WheyValuesConverted {
  private _whey: WheyProteinProtocol
  constructor(whey: WheyProteinProtocol) {
    this._whey = whey
  }

  private _convertedWhey: any = {}
  get whey(): WheyProteinProtocol {
    return this._whey
  }

  get convertedWhey(): WheyProteinProtocol {
    return this._convertedWhey
  }

  set convertedWhey(value: any) {
    this._convertedWhey = value
  }

  convertCaloriesTokJ(kJ: number) {
    return `${this.whey.nutrients.calories.value} cal / ${Math.round(
      Number(this.whey.nutrients.calories.value) * kJ
    )} kJ`;
  }

  listOfingredients() {
    return this.convertedWhey.description.ingredients.join(", ");
  }

  listContains() {
    if (!this.convertedWhey.description.contains) return undefined;
    return this.convertedWhey.description.contains.join(", ");
  }

  convertValues() {
    const values = Object.entries(this.whey.nutrients)
    const nutriValues = Object.entries(nutritionalValues)
    const convertedValuesMap: any = {}
    for (let index = 0; index < values.length; index++) {
      const element = values[index]
      nutriValues.forEach((item) => {
        const vd =
          item[1].value !== null
            ? Math.round((element[1].value! * 100) / item[1].value)
            : '**'
        if (element[0] === item[0]) {
          if (item[0] === 'calories') {
            convertedValuesMap[element[0]] = {
              unit: "",
              name: item[1].name,
              value: this.convertCaloriesTokJ(4.184),
              vd,
            }
          } else {
            convertedValuesMap[element[0]] = {
              unit: element[1].unit,
              name: item[1].name,
              value: element[1].value,
              vd,
            }
          }
        }
      })
    }
    this.convertedWhey.description = {
      name: this.whey.description.name,
      brand: this.whey.description.brand,
      category: this.whey.description.category,
      subCategory: this.whey.description.subCategory,
      size: this.whey.description.size,
      genericSize: this.whey.description.genericSize,
      servings: this.whey.description.servings,
      servingSize: this.whey.description.servingSize,
      infos: this.whey.description.infos,
      ingredients: this.whey.description.ingredients,
    }
    this.convertedWhey.nutrients = convertedValuesMap
    if (
      this.whey.description.contains !== undefined &&
      this.whey.description.contains !== null
    ) {
      this.convertedWhey.description.contains = this.whey.description.contains
    }
    if (
      this.whey.description.flavor !== undefined &&
      this.whey.description.flavor !== null
    ) {
      this.convertedWhey.description.flavor = this.whey.description.flavor
    }
  }
}
