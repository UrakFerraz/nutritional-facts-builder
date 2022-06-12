// Valores diários de referência de nutrientes de declaração obrigatória

import { NutrientsInterface } from '~/composables/interfaces/nutrients'

type PowderNutrientsVD = Pick<
  NutrientsInterface,
  | 'calories'
  | 'carbohydrate'
  | 'protein'
  | 'totalFat'
  | 'saturatedFat'
  | 'dietaryFibers'
  | 'sodium'
>
const VD: PowderNutrientsVD = {
  calories: { unit: 'kcal', value: 2000, name: 'Calorias' },
  carbohydrate: { unit: 'g', value: 300, name: 'Carboidrato' },
  protein: { unit: 'g', value: 75, name: 'Proteínas' },
  totalFat: { unit: 'g', value: 55, name: 'Gorduras Totais' },
  saturatedFat: { unit: 'g', value: 22, name: 'Gorduras Saturadas' },
  dietaryFibers: { unit: 'g', value: 25, name: 'Fibra Alimentar' },
  sodium: { unit: 'g', value: 2000, name: 'Sódio' },
}

export default VD
