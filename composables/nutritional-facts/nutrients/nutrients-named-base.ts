import { NutrientsInterface } from '~/composables/interfaces/nutrients'
export default abstract class NutrientsNamedAbstract {
  abstract addNames(nutrients: NutrientsInterface): void
}
