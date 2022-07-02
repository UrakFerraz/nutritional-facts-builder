import { PowderDescriptionInterface } from '~/interfaces/powder-description'
import { NutrientsInterface } from '~/interfaces/nutrients'

export interface NutritionalFactsInterface {
  id: number
  description: PowderDescriptionInterface
  infos?: string[]
  ingredients: string
  nutrients: NutrientsInterface
}
