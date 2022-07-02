import ingredientsList from '~/static/mocks/ingredients-list'

export default class IdentifyIngredients {
  private list = ingredientsList
  constructor(private _ingredients: string) {}
  get ingredients(): string {
    return this._ingredients
  }

  identify(): string[] {
    return this.list.reduce((acc: string[], item) => {
      if (this.ingredients.includes(item)) {
        acc.push(item)
      }
      return acc
    }, [])
  }
}
