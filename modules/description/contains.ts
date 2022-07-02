import IdentifyIngredients from '../nutrients/ingredients-identify'
import { PowderDescriptionInterface } from '~/interfaces/powder-description'

export default class Contains {
  private static _contains: IdentifyIngredients

  get powderDescription(): PowderDescriptionInterface {
    return this._powderDescription
  }

  constructor(
    private readonly _powderDescription: PowderDescriptionInterface
  ) {}

  set contains(value: IdentifyIngredients) {
    Contains._contains = value
  }

  get contains(): IdentifyIngredients {
    return Contains._contains
  }

  getContains(): string[] {
    return this.contains.identify()
  }
}
