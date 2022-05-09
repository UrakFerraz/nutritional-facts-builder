import nutritionalValues from '../../static/mocks/nutritional-values'
import { WheyProteinProtocol } from '../interfaces/whey-protein-protocol'
export class WheyValuesConverted {
  private _whey: WheyProteinProtocol
  constructor(whey: WheyProteinProtocol) {
    this._whey = whey
  }

  private convertedWhey: any = {}
  get whey(): WheyProteinProtocol {
    return this._whey
  }

  convertValues() {
    const values = Object.entries(this.whey)
    const nutriValues = Object.entries(nutritionalValues)
    const convertedValuesMap: any[] = []
    for (let index = 0; index < values.length; index++) {
      const element = values[index];
      nutriValues.forEach(item => {
        if(element[0] === item[0]) {
          convertedValuesMap.push({ [element[0]]: { unit: element[1].unit, value: element[1].value, vd: Math.round((element[1].value * 100) / item[1].value) }})
        }
      })
    }
    this.convertedWhey.name = this.whey.name
    this.convertedWhey.brand = this.whey.brand
    this.convertedWhey.category = this.whey.category
    this.convertedWhey.subCategory = this.whey.subCategory
    if (this.whey.flavor !== undefined && this.whey.flavor !== null) {
      this.convertedWhey.flavor = this.whey.flavor
    }
    this.convertedWhey.size = this.whey.size
    this.convertedWhey.genericSize = this.whey.genericSize
    this.convertedWhey.servings = this.whey.servings
    this.convertedWhey.servingSize = this.whey.servingSize
    convertedValuesMap.forEach(item => {
      this.convertedWhey = Object.assign(this.convertedWhey, item)
    })
    this.convertedWhey.infos = this.whey.infos
    this.convertedWhey.ingredients = this.whey.ingredients
    if (this.whey.contains !== undefined && this.whey.contains !== null) {
      this.convertedWhey.contains = this.whey.contains
    }
    console.log(this.convertedWhey);
  }
}
