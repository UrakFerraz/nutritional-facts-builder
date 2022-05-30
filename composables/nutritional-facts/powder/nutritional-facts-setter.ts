/* eslint-disable no-console */
import NutrientsVD from '../nutrients/nutrients-vd-setter'
import PowderDescription from '../description/powder-description-setter'
import { PowderInterface } from '~/composables/interfaces/powder'
export class PowderNutritionalFacts {
  constructor(
    private _powder: PowderInterface,
    private _nutrients: NutrientsVD,
    private _description: PowderDescription
  ) {}

  private _powderWithVD: any

  get powder(): PowderInterface {
    return this._powder
  }

  get nutrients(): NutrientsVD {
    return this._nutrients
  }

  get description(): PowderDescription {
    return this._description
  }

  set powderWithVD(powder) {
    this._powderWithVD = powder
  }

  get powderWithVD() {
    return this._powderWithVD
  }

  setPowderWithVD() {
    this.nutrients.addVD()
    const model = {
      id: this.powder.id,
      nutrients: this.nutrients.nutrientsWithVD,
      description: this.description.powderDescription,
    }
    this.powderWithVD = Object.assign({}, model)
  }
}
