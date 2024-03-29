export interface NutrientInterface {
  unit: string
  value?: number | string | undefined
  vd?: number | string
  name?: string
}

export type NutrientIterableInterface = [string, NutrientInterface]
