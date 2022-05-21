import { PowderDescriptionInterface } from '../../interfaces/powder-description'

export default class PowderDescription {
  private _model: PowderDescriptionInterface = {
    name: '',
    brand: '',
    category: '',
    subCategory: '',
    size: '',
    genericSize: 0,
    servings: 0,
    servingSize: 0,
    infos: [],
    ingredients: [],
    contains: undefined,
    flavor: undefined,
  }

  get model(): PowderDescriptionInterface {
    return this._model
  }

  set model(value: PowderDescriptionInterface) {
    this.model = value
  }

  constructor(private powderDescription: PowderDescriptionInterface) {}

  convertValues() {
    const model = {
      name: this.powderDescription.name,
      brand: this.powderDescription.brand,
      category: this.powderDescription.category,
      subCategory: this.powderDescription.subCategory,
      size: this.powderDescription.size,
      genericSize: this.powderDescription.genericSize,
      servings: this.powderDescription.servings,
      servingSize: this.powderDescription.servingSize,
      infos: this.powderDescription.infos,
      ingredients: this.powderDescription.ingredients,
      contains: this.powderDescription.contains,
      flavor: this.powderDescription.flavor,
    }
    this.model = Object.assign({}, model)
  }
}
