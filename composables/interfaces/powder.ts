import { PowderDescriptionInterface } from './powder-description'
import { NutrientsInterface } from './Nutrients'

export interface PowderInterface {
  id: number
  description: PowderDescriptionInterface
  nutrients: NutrientsInterface
}
