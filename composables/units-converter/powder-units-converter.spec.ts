import PowderUnitsConverter from './powder-units-converter'
import wheyProtein from '~/static/mocks/whey-protein-mock'

describe('deve converter unidades de pós', () => {
  it('deve manter o mesmo valor sem conversão', () => {
    const converter = new PowderUnitsConverter(wheyProtein[1])
    converter.convertUnits()
    console.log(converter.converterConfig)
  })
})
