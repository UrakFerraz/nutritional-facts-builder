import NutrientsVD from '../nutrients/nutrients-vd-setter'
import PowderDescription from '../description/powder-description-setter'
import { NutrientsNamed } from '../nutrients/nutrients-named'
import { PowderInterface } from '~/composables/interfaces/powder'
import { NutrientsInterface } from '~/composables/interfaces/nutrients'
import { PowderDescriptionInterface } from '~/composables/interfaces/powder-description'
export class PowderNutritionalFactsSetter {
  constructor(private readonly powder: PowderInterface) {}
  private static _id: number
  private static _nutrients: NutrientsInterface
  private static _description: PowderDescriptionInterface
  private static _ingredients: string
  get nutrients() {
    return PowderNutritionalFactsSetter._nutrients
  }

  get description() {
    return PowderNutritionalFactsSetter._description
  }

  get id() {
    return PowderNutritionalFactsSetter._id
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

  setNutrients() {
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

  private removeNotSignificantVDNutrientes() {
    const newly = Object.entries(this.nutrients)
    newly.forEach((nutrient) => {
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
    }
  }

  main() {
    this.setId()
    this.setNutrients()
    this.setDescription()
    this.removeNotSignificantVDNutrientes()
    PowderNutritionalFactsSetter._ingredients = this.powder.ingredients
    return this
  }
}
