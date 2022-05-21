export interface PowderDescriptionInterface {
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
  infos: string[]
  ingredients: string[]
  contains?: string[]
}
