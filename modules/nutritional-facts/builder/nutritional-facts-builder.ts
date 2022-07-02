
import PowderDescription from '../../description/powder-description-setter'
import NotSignificantVD from '../../description/not-sgnificant-vd'
import { NutritionalFactsInterface } from '~/interfaces/nutritional-facts'
import { NutrientsInterface } from '~/interfaces/nutrients'
import { PowderDescriptionInterface } from '~/interfaces/powder-description'
import VD from '~/static/mocks/BR_VD'
import NutrientsVD from '~/modules/nutrients/nutrients-vd-setter'
import { NutrientsNamed } from '~/modules/nutrients/nutrients-named'
export class NutritionalFactsBuilder {
  constructor(private readonly powder: NutritionalFactsInterface) {}
  private static _id: number
  private static _nutrients: NutrientsInterface
  private static _description: PowderDescriptionInterface
  private static _ingredients: string
  private static _infos: string[]
  get nutrients() {
    return NutritionalFactsBuilder._nutrients
  }

  get description() {
    return NutritionalFactsBuilder._description
  }

  get id() {
    return NutritionalFactsBuilder._id
  }

  get info() {
    return NutritionalFactsBuilder._infos
  }

  get ingredients() {
    return NutritionalFactsBuilder._ingredients
  }

  private setId() {
    NutritionalFactsBuilder._id = this.powder.id
  }

  private setIngredients() {
    NutritionalFactsBuilder._ingredients = this.powder.ingredients
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
    NutritionalFactsBuilder._nutrients = Object.assign(
      nutrientsWithVD,
      nutrientsWithNames
    )
  }

  private setDescription() {
    const powder = Object.assign({}, this.powder, {
      nutrients: NutritionalFactsBuilder._nutrients,
    })
    const descriptionSetter = new PowderDescription(powder)
    NutritionalFactsBuilder._description =
      descriptionSetter.main().powderDescription
  }

  private setInfos() {
    const notSignificantText = new NotSignificantVD(this.nutrients)
      .setNotSignificantNutrient()
      .createNotSignificantNutrientText().notSignificantNutrientText
    NutritionalFactsBuilder._infos = [notSignificantText, ...VD.infos]
  }

  getNutritionalFacts() {
    return {
      id: NutritionalFactsBuilder._id,
      nutrients: NutritionalFactsBuilder._nutrients,
      description: NutritionalFactsBuilder._description,
      ingredients: NutritionalFactsBuilder._ingredients,
      infos: NutritionalFactsBuilder._infos,
    }
  }

  main() {
    this.setId()
    this.setNutrients()
    this.setDescription()
    this.setInfos()
    this.setIngredients()
    return this
  }
}
