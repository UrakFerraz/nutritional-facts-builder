import { NutritionalFactsInterface } from '~/interfaces/nutritional-facts'
import { DescriptionInterface } from '~/interfaces/description'

export default class PowderDescription {
  private static _powderDescription: DescriptionInterface
  constructor(private readonly _powder: NutritionalFactsInterface) {}
  get powderDescription(): DescriptionInterface {
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
