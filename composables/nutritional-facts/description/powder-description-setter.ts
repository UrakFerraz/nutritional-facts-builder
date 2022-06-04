import { PowderDescriptionInterface } from '../../interfaces/powder-description'
import NotSignificantVD from './not-sgnificant-vd'
import infos from './vd-infos'
import { PowderInterface } from '~/composables/interfaces/powder'

export default class PowderDescription {
  private _powderDescription: PowderDescriptionInterface | null = null
  constructor(private readonly _powder: PowderInterface) {}
  get powderDescription(): PowderDescriptionInterface | null {
    return this._powderDescription
  }

  setPowderDescription() {
    this._powderDescription = this._powder.description
  }

  setNotSignificantInfo() {
    const text = new NotSignificantVD(this._powder.nutrients).setNotSignificantNutrient().setNotSignificantNutrientText()
    this._powderDescription!.infos = [
      text.notSignificantNutrientText!,
      infos[1],
      infos[2],
    ]
  }

  init() {
    this.setPowderDescription()
    this.setNotSignificantInfo()
    return this
  }
}
