import NutrientsVD from '../nutrients/nutrients-vd-setter'
import PowderDescription from '../description/powder-description-setter'
import { PowderInterface } from '~/composables/interfaces/powder'
import { NutrientsInterface } from '~/composables/interfaces/nutrients'
import { PowderDescriptionInterface } from '~/composables/interfaces/powder-description'
export class PowderNutritionalFactsSetter {
  constructor(private readonly powder: PowderInterface) {}
  private static _id: number
  private static _nutrientsWithVD: NutrientsInterface
  private static _description: PowderDescriptionInterface
  get nutrientsWithVD() {
    return PowderNutritionalFactsSetter._nutrientsWithVD
  }

  get description() {
    return PowderNutritionalFactsSetter._description
  }

  get id() {
    return PowderNutritionalFactsSetter._id
  }

  private setId() {
    PowderNutritionalFactsSetter._id = this.powder.id
  }

  private setNutrientsVD() {
    const vdSetter = new NutrientsVD(this.powder.nutrients)
    PowderNutritionalFactsSetter._nutrientsWithVD =
      vdSetter.addVD().nutrientsWithVD
  }

  private setDescription() {
    const powderWithVD = Object.assign({}, this.powder, {
      nutrients: this.nutrientsWithVD,
    })
    const descriptionSetter = new PowderDescription(powderWithVD)
    PowderNutritionalFactsSetter._description =
      descriptionSetter.init().powderDescription
  }

  private removeNotSignificantVDNutrientes() {
    const newly = Object.entries(this.nutrientsWithVD)
    newly.forEach((nutrient) => {
      if (nutrient[1].vd < 1) {
        const nutrientName =
          nutrient[0] as keyof typeof PowderNutritionalFactsSetter._nutrientsWithVD
        delete PowderNutritionalFactsSetter._nutrientsWithVD[nutrientName]
      }
    })
    return this
  }

  getNutritionalFacts() {
    return {
      id: this.id,
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
