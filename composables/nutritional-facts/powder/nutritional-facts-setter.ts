import NutrientsVD from '../nutrients/nutrients-vd-setter'
import PowderDescription from '../description/powder-description-setter'
import { PowderInterface } from '~/composables/interfaces/powder'
import { NutrientsInterface } from '~/composables/interfaces/nutrients'
import { PowderDescriptionInterface } from '~/composables/interfaces/powder-description'
export class PowderNutritionalFactsSetter {
  constructor(private readonly powder: PowderInterface) {}

  private _id: number | null = null

  private _nutrientsWithVD: NutrientsInterface | null = null

  private _description: PowderDescriptionInterface | null = null

  get nutrientsWithVD() {
    return this._nutrientsWithVD
  }

  get description() {
    return this._description
  }

  get id() {
    return this._id
  }

  private setId() {
    this._id = this.powder.id
  }

  private setNutrientsVD() {
    const vdSetter = new NutrientsVD(this.powder.nutrients)
    this._nutrientsWithVD = vdSetter.addVD().nutrientsWithVD
  }

  private setDescription() {
    if (this.nutrientsWithVD === null) return
    const powderWithVD = Object.assign({}, this.powder, {
      nutrients: this.nutrientsWithVD,
    })
    const descriptionSetter = new PowderDescription(powderWithVD)
    this._description = descriptionSetter.init().powderDescription
  }

  private removeNotSignificantVDNutrientes() {
    const newly = Object.entries(this.nutrientsWithVD!)
    newly.forEach((nutrient) => {
      if (nutrient[1].vd < 1) {
        const nutrientName = nutrient[0] as keyof typeof this._nutrientsWithVD
        delete this._nutrientsWithVD![nutrientName]
      }
    })
    return this
  }

  getNutritionalFacts() {
    return {
      id: this._id,
      nutrients: this.nutrientsWithVD,
      description: this.description,
    }
  }

  init() {
    this.setId()
    this.setNutrientsVD()
    this.setDescription()
    this.removeNotSignificantVDNutrientes()
    return this
  }
}
