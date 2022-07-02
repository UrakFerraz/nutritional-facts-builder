import { NutritionalFactsInterface } from '~/interfaces/nutritional-facts'
import { PowderDescriptionInterface } from '~/interfaces/powder-description'

export default class PowderDescription {
  private static _powderDescription: PowderDescriptionInterface
  constructor(private readonly _powder: NutritionalFactsInterface) {}
  get powderDescription(): PowderDescriptionInterface {
    return PowderDescription._powderDescription
  }

  private setPowderDescription() {
    PowderDescription._powderDescription = this._powder.description
  }

  main() {
    this.setPowderDescription()
    return this
  }
}
