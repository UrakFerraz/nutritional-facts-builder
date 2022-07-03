import { DescriptionInterface } from '~/interfaces/description'
import { NutrientsInterface } from '~/interfaces/nutrients'

export interface NutritionalFactsInterface {
  id: number
  description: DescriptionInterface
  infos?: string[]
  ingredients: string
  nutrients: NutrientsInterface
}
