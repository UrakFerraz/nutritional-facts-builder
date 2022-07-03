import IdentifyIngredients from '../nutrients/ingredients-identify'
import { DescriptionInterface } from '~/interfaces/description'

export default class Contains {
  private static _contains: IdentifyIngredients

  get powderDescription(): DescriptionInterface {
    return this._powderDescription
  }

  constructor(
    private readonly _powderDescription: DescriptionInterface
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
