import PowderUnitsConverter from './powder-units-converter'
import wheyProtein from '~/static/mocks/whey-protein-mock'
import wheyWrongUnits from '~/static/mocks/wrong-units-whey'

describe('deve converter unidades de pós', () => {
  it('deve manter o mesmo valor sem conversão', () => {
    const converter = new PowderUnitsConverter(wheyProtein[1], 'calcium')
    converter.convertUnit()
    const notConverted = { unit: '', convertion: 0 }
    expect(converter.converterConfig).toMatchObject(notConverted)
  })
  it('deve converter valores de g para mg', () => {
    const converter = new PowderUnitsConverter(wheyWrongUnits, 'calcium')
    converter.convertUnit()
    const converted = { unit: 'mg', convertion: 150 }
    expect(converter.converterConfig).toMatchObject(converted)
  })
  it('deve converter valores de mg para g', () => {
    const converter = new PowderUnitsConverter(wheyWrongUnits, 'totalFat')
    converter.convertUnit()
    const converted = { unit: 'g', convertion: 6 }
    expect(converter.converterConfig).toMatchObject(converted)
  })
  it('deve converter valores de mcg para mg', () => {
    const converter = new PowderUnitsConverter(wheyWrongUnits, 'cholesterol')
    converter.convertUnit()
    const converted = { unit: 'mg', convertion: 55 }
    expect(converter.converterConfig).toMatchObject(converted)
  })
})
