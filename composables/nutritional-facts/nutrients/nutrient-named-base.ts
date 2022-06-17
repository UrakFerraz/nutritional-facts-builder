import { NutrientsInterface } from "~/composables/interfaces/nutrients";

export default abstract class NutrientNamedAbstract {
  abstract addName(nutrientName: string, nutrients: NutrientsInterface): void
}
