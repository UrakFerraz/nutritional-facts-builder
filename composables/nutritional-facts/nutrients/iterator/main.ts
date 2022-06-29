/* eslint-disable no-console */
import foodsDatabase from '../../../../static/mocks/foods-database'
import { NutrientsNameIterator } from './iterator-addName'
import { NutrientsIteratorStructure } from './nutrients-structure'

const nutrientsStructure = new NutrientsIteratorStructure()

nutrientsStructure.addNutrients(foodsDatabase[0].nutrients)

for (const nutrient of nutrientsStructure) {
  console.log(nutrient)
}

nutrientsStructure.changeIterator(new NutrientsNameIterator(nutrientsStructure))

for (const nutrient of nutrientsStructure) {
  console.log(nutrient)
}
