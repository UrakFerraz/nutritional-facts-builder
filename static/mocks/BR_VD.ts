// Valores diários de referência de nutrientes de declaração obrigatória

import { NutrientsInterface } from '~/interfaces/nutrients'

type MainNutrientsVD = Pick<
  NutrientsInterface,
  | 'calories'
  | 'carbohydrate'
  | 'protein'
  | 'totalFat'
  | 'saturatedFat'
  | 'dietaryFibers'
  | 'sodium'
>
const VD: { nutrients: MainNutrientsVD; infos: string[] } = {
  nutrients: {
    calories: { unit: 'kcal', value: 2000, name: 'Calorias' },
    carbohydrate: { unit: 'g', value: 300, name: 'Carboidrato' },
    protein: { unit: 'g', value: 75, name: 'Proteínas' },
    totalFat: { unit: 'g', value: 55, name: 'Gorduras Totais' },
    saturatedFat: { unit: 'g', value: 22, name: 'Gorduras Saturadas' },
    dietaryFibers: { unit: 'g', value: 25, name: 'Fibra Alimentar' },
    sodium: { unit: 'g', value: 2000, name: 'Sódio' },
  },
  infos: [
    '(*) % Valores Diários de referência com base em uma dieta de 2.000kcal ou 8.400kJ. Seus valores diários podem ser maiores ou menores, dependendo das suas necessidades energéticas',
    '(**) Valores diários não estabelecidos.',
  ],
}

export default VD
