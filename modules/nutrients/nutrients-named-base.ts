import { NutrientsInterface } from '~/interfaces/nutrients'
export default abstract class NutrientsNamedAbstract {
  abstract addNames(nutrients: NutrientsInterface): void
}
