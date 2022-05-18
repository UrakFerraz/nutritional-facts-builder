import wheyProtein from '../../static/mocks/whey-protein-mock'
import { WheyValuesConverted } from './values-converter';

describe('deve converter a whey para valores com VD', () => {
  it('deve existir a classe de converter', () => {
    const mock = new WheyValuesConverted(wheyProtein[1])
    expect(mock).toBeDefined()
    expect(mock.whey).toEqual(wheyProtein[1])
  });
  it('deve existir a whey convertida', () => {
    const mock = new WheyValuesConverted(wheyProtein[1])
    mock.convertValues()
    expect(mock.convertedWhey.nutrients.carbohydrate.vd).toBeTruthy()
  });
});
