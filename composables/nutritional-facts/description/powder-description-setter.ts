import { PowderInterface } from '~/composables/interfaces/powder'
import { PowderDescriptionInterface } from '~/composables/interfaces/powder-description'

export default class PowderDescription {
  private static _powderDescription: PowderDescriptionInterface
  constructor(private readonly _powder: PowderInterface) {}
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
