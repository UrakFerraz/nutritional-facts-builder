export type IngredientProtocol = {
  unit: string
  value: number | null
  vd?: number
}
export interface WheyProteinProtocol {
  name: string
  brand: string
  category: string
  subCategory: string
  flavor?: string
  size: string
  // generics search sizes in grams: 100g, 500g, 1000g, 2000g ...
  genericSize: number
  // servings per container
  servings: number
  // Serving Size About 1 Scoop
  servingSize: number
  transFat: IngredientProtocol
  calories: IngredientProtocol
  totalFat: IngredientProtocol
  saturatedFat: IngredientProtocol
  cholesterol: IngredientProtocol
  carbohydrate: IngredientProtocol
  dietaryFibers?: IngredientProtocol
  totalSugars?: IngredientProtocol
  protein: IngredientProtocol
  biotin?: IngredientProtocol
  calcium?: IngredientProtocol
  choline?: IngredientProtocol
  chrome?: IngredientProtocol
  copper?: IngredientProtocol
  fluorine?: IngredientProtocol
  folicAcid?: IngredientProtocol
  iodine?: IngredientProtocol
  iron?: IngredientProtocol
  magnesium?: IngredientProtocol
  manganese?: IngredientProtocol
  molybdenum?: IngredientProtocol
  niacin?: IngredientProtocol
  pantothenicAcid?: IngredientProtocol
  phosphorus?: IngredientProtocol
  potassium?: IngredientProtocol
  riboflvin?: IngredientProtocol
  selenium?: IngredientProtocol
  sodium?: IngredientProtocol
  thiamine?: IngredientProtocol
  vitaminA?: IngredientProtocol
  vitaminB12?: IngredientProtocol
  vitaminB6?: IngredientProtocol
  vitaminC?: IngredientProtocol
  vitaminD?: IngredientProtocol
  vitaminE?: IngredientProtocol
  vitaminK?: IngredientProtocol
  zinc?: IngredientProtocol
  infos: string[]
  ingredients: string[]
  contains?: string[]
}
