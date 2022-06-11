import { NutritionalValues } from '~/composables/interfaces/nutritional-values'

const nutritionalValues: NutritionalValues = {
  calories: { unit: 'kcal', value: 2000, name: 'Calorias' },
  carbohydrate: { unit: 'g', value: 300, name: 'Carboidrato' },
  protein: { unit: 'g', value: 75, name: 'Proteínas' },
  totalFat: { unit: 'g', value: 55, name: 'Gorduras Totais' },
  saturatedFat: { unit: 'g', value: 22, name: 'Gorduras Saturadas' },
  transFat: { unit: 'g', value: undefined, name: 'Gorduras Trans' },
  totalSugars: { unit: 'g', value: undefined, name: 'Açúcares' },
  dietaryFibers: { unit: 'g', value: 25, name: 'Fibra Alimentar' },
  sodium: { unit: 'g', value: 2000, name: 'Sódio' },
  calcium: { unit: 'mg', value: 1000, name: 'Cálcio' },
  cholesterol: { unit: 'mg', value: 300, name: 'Colesterol' },
  biotin: { unit: 'mcg', value: 30, name: 'Biotina' },
  choline: { unit: 'mg', value: 550, name: 'Colina' },
  chrome: { unit: 'mcg', value: 35, name: 'Cromo' },
  copper: { unit: 'mcg', value: 900, name: 'Cobre' },
  fluorine: { unit: 'mg', value: 4, name: 'Flúor' },
  folicAcid: { unit: 'mcg', value: 400, name: 'Ácido Fólico' },
  iodine: { unit: 'mcg', value: 130, name: 'Iodo' },
  iron: { unit: 'mg', value: 14, name: 'Ferro' },
  magnesium: { unit: 'mg', value: 260, name: 'Magnésio' },
  manganese: { unit: 'mg', value: 2.3, name: 'Manganês' },
  molybdenum: { unit: 'mcg', value: 45, name: 'Molibidênio' },
  niacin: { unit: 'mg', value: 16, name: 'Niacina' },
  pantothenicAcid: { unit: 'mg', value: 5, name: 'Ácido Pantotênico' },
  phosphorus: { unit: 'mg', value: 700, name: 'Fósforo' },
  potassium: { unit: 'mg', value: undefined, name: 'Potássio' },
  riboflavin: { unit: 'mg', value: 1.3, name: 'Riboflavina' },
  saturatedFattyAcids: {
    unit: 'g',
    value: 20,
    name: 'Ácidos Graxos Saturados',
  },
  selenium: { unit: 'mcg', value: 55, name: 'Selênio' },
  thiamine: { unit: 'mg', value: 1.2, name: 'Tiamina' },
  vitaminA: { unit: 'mcg', value: 600, name: 'Vitamina A' },
  vitaminB12: { unit: 'mcg', value: 2.4, name: 'Vitamina B12' },
  vitaminB6: { unit: 'mg', value: 1.6, name: 'Vitamina B6' },
  vitaminC: { unit: 'mg', value: 45, name: 'Vitamina C' },
  vitaminD: { unit: 'mcg', value: 5, name: 'Vitamina D' },
  vitaminE: { unit: 'mg', value: 10, name: 'Vitamina E' },
  vitaminK: { unit: 'mcg', value: 65, name: 'Vitamina K' },
  zinc: { unit: 'mg', value: 7, name: 'Zinco' },
}

export default nutritionalValues
