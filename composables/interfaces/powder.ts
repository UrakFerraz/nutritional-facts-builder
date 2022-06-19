import { PowderDescriptionInterface } from '~/composables/interfaces/powder-description'
import { NutrientsInterface } from '~/composables/interfaces/nutrients'

export interface PowderInterface {
  id: number
  description: PowderDescriptionInterface
  nutrients: NutrientsInterface
}
