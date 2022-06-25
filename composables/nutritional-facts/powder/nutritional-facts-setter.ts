import NutrientsVD from '../nutrients/nutrients-vd-setter'
import PowderDescription from '../description/powder-description-setter'
import { NutrientsNamed } from '../nutrients/nutrients-named'
import NotSignificantVD from '../description/not-sgnificant-vd'
import { PowderInterface } from '~/composables/interfaces/powder'
import { NutrientsInterface } from '~/composables/interfaces/nutrients'
import { PowderDescriptionInterface } from '~/composables/interfaces/powder-description'
import VD from '~/static/mocks/BR_VD'
export class PowderNutritionalFactsSetter {
  constructor(private readonly powder: PowderInterface) {}
  private static _id: number
  private static _nutrients: NutrientsInterface
  private static _description: PowderDescriptionInterface
  private static _ingredients: string
  private static _infos: string[]
  get nutrients() {
    return PowderNutritionalFactsSetter._nutrients
  }

  get description() {
    return PowderNutritionalFactsSetter._description
  }

  get id() {
    return PowderNutritionalFactsSetter._id
  }

  get info() {
    return PowderNutritionalFactsSetter._infos
  }

  get ingredients() {
    return PowderNutritionalFactsSetter._ingredients
  }

  private setId() {
    PowderNutritionalFactsSetter._id = this.powder.id
  }

  private setNutrientsVD() {
    const vdSetter = new NutrientsVD(this.powder.nutrients)
    return vdSetter.addVD().nutrients
  }

  private setNutrientsNames() {
    const nutrientsNamed = new NutrientsNamed(this.powder.nutrients)
    return nutrientsNamed.addNames().nutrients
  }

  private setNutrients() {
    const nutrientsWithVD = this.setNutrientsVD()
    const nutrientsWithNames = this.setNutrientsNames()
    PowderNutritionalFactsSetter._nutrients = Object.assign(
      nutrientsWithVD,
      nutrientsWithNames
    )
  }

  private setDescription() {
    const powder = Object.assign({}, this.powder, {
      nutrients: PowderNutritionalFactsSetter._nutrients,
    })
    const descriptionSetter = new PowderDescription(powder)
    PowderNutritionalFactsSetter._description =
      descriptionSetter.main().powderDescription
  }

  private setInfos() {
    const notSignificantText = new NotSignificantVD(this.nutrients)
      .setNotSignificantNutrient()
      .createNotSignificantNutrientText().notSignificantNutrientText
    PowderNutritionalFactsSetter._infos = [notSignificantText, ...VD.infos]
  }

  private setNotSignificantVDNutrientes() {
    Object.entries(this.nutrients).forEach((nutrient) => {
      if (nutrient[1].vd < 1 && nutrient[1].value !== 0) {
        const nutrientName =
          nutrient[0] as keyof typeof PowderNutritionalFactsSetter._nutrients
        delete PowderNutritionalFactsSetter._nutrients[nutrientName]
      }
    })
    return this
  }

  getNutritionalFacts() {
    return {
      id: PowderNutritionalFactsSetter._id,
      nutrients: PowderNutritionalFactsSetter._nutrients,
      description: PowderNutritionalFactsSetter._description,
      ingredients: PowderNutritionalFactsSetter._ingredients,
      infos: PowderNutritionalFactsSetter._infos,
    }
  }

  main() {
    this.setId()
    this.setNutrients()
    this.setDescription()
    this.setInfos()
    this.setNotSignificantVDNutrientes()
    PowderNutritionalFactsSetter._ingredients = this.powder.ingredients
    return this
  }
}
