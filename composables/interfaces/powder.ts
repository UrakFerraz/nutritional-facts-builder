import { PowderDescriptionInterface } from './powder-description'
import { NutrientsInterface } from './nutrients'

export interface PowderInterface {
  id: number
  description: PowderDescriptionInterface
  nutrients: NutrientsInterface
}
