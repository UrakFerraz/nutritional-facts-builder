import NotSignificantVD from './not-sgnificant-vd'
import infos from './vd-infos'
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

  private setNotSignificantVD() {
    const text = new NotSignificantVD(this._powder.nutrients)
      .setNotSignificantNutrient()
      .createNotSignificantNutrientText()
    PowderDescription._powderDescription!.infos = [
      text.notSignificantNutrientText!,
      infos[1],
      infos[2],
    ]
  }

  init() {
    this.setPowderDescription()
    this.setNotSignificantVD()
    return this
  }
}
