import PowderUnitsConverter from './powder-units-converter'
import foodsDatabase from '~/static/mocks/foodsDatabase'
import wheyWrongUnits from '~/static/mocks/wrong-units-whey'

const convertedValues = [
  { unit: 'g', nutrientName: 'sodium', convertion: 0.022 },
]

const convertedValues2 = [
  { unit: 'g', nutrientName: 'totalFat', convertion: 6 },
  { unit: 'g', nutrientName: 'saturatedFat', convertion: 2 },
  { unit: 'g', nutrientName: 'dietaryFibers', convertion: 1 },
  { unit: 'g', nutrientName: 'sodium', convertion: 0.022 },
  { unit: 'mg', nutrientName: 'calcium', convertion: 150 },
  { unit: 'mg', nutrientName: 'cholesterol', convertion: 55 },
]

describe('deve converter unidades de pós', () => {
  it('deve converter 1 valor', () => {
    const converter = new PowderUnitsConverter(foodsDatabase[1])
    converter.convertUnits()
    converter.setConvertedPowder()
    expect(converter.converterConfig).toEqual(convertedValues)
  })
  it('deve converter as informações de nutrientes no powder', () => {
    const converter = new PowderUnitsConverter(wheyWrongUnits)
    converter.convertUnits()
    expect(converter.converterConfig).toEqual(convertedValues2)
    converter.setConvertedPowder()
    expect(converter.converted).toEqual(foodsDatabase[1])
  })
})
