import { PowderDescriptionInterface } from '../../interfaces/powder-description'
import IdentifyIngredients from '../nutrients/ingredients-identify'

export default class Contains {
  private _contains: IdentifyIngredients | null = null

  get powderDescription(): PowderDescriptionInterface {
    return this._powderDescription
  }

  constructor(
    private readonly _powderDescription: PowderDescriptionInterface
  ) {}

  set contains(value: IdentifyIngredients | null) {
    if (value === null) return
    this._contains = value
  }

  get contains(): IdentifyIngredients | null {
    return this._contains
  }

  getContains(): string[] | null {
    if (this.contains !== null) return this.contains.identify()
    return null
  }
}
