/* eslint-disable no-console */
import NutrientsVD from '../nutrients/nutrients-vd-setter'
import { PowderInterface } from '~/composables/interfaces/powder'
export class PowderNutritionalFacts {
  constructor(
    private _powder: PowderInterface,
    private _nutrients: NutrientsVD
  ) {}

  private _powderWithVD: any

  get powder(): PowderInterface {
    return this._powder
  }

  get nutrients(): NutrientsVD {
    return this._nutrients
  }

  set powderWithVD(powder) {
    this._powderWithVD = powder
  }

  get powderWithVD() {
    return this._powderWithVD
  }

  setPowderWithVD() {
    this.nutrients.convertValues()
    const model = {
      id: this.powder.id,
      nutrients: this.nutrients.nutrientsWithVD,
      description: this.powder.description,
    }
    this.powderWithVD = Object.assign({}, model)
  }
}
