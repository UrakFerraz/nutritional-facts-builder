import ingredientsList from '~/static/mocks/ingredients-list'

export default class IdentifyIngredients {
  private list = ingredientsList
  constructor(private _ingredients: string) {}
  get ingredients(): string {
    return this._ingredients
  }

  identify(): string[] {
    const list: string[] = []
    this.list.forEach((item) => {
      if (this.ingredients.includes(item)) {
        list.push(item)
      }
    })
    return list
  }
}
