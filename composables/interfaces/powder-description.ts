export interface PowderDescriptionInterface {
  name: string | undefined
  brand: string | undefined
  category: string | undefined
  subCategory: string | undefined
  flavor: string | undefined
  size: string | undefined
  // generics search sizes in grams: 100g, 500g, 1000g, 2000g ...
  genericSize: number | undefined
  // servings per container
  servings: number | undefined
  // Serving Size About 1 Scoop
  servingSize: number | undefined
  infos: string[] | undefined
  ingredients: string | undefined
  contains: string | undefined
}
