import { PowderDescriptionInterface } from '../../interfaces/powder-description'

export default class PowderDescription {
  get powderDescription(): PowderDescriptionInterface {
    return this._powderDescription
  }

  constructor(
    private readonly _powderDescription: PowderDescriptionInterface
  ) {}
}
