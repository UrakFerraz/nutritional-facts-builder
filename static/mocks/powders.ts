const powders = [
  {
    id: 1,
    description: {
      name: 'GOLD STANDARD 100% WHEY PROTEIN',
      brand: 'OPTIMUM NUTRITION',
      category: 'protein',
      subCategory: 'whey protein',
      flavor: 'Vanilla Ice Cream',
      size: 2200,
      servingSize: 31,
      infos: [
        'Not a significant source of trans fat, dietary fiber, added sugars, vitamin D and iron.',
        '* The % Daily Value tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice',
      ],
      ingredients:
        'Protein Blend (Whey Protein Isolate, Whey Protein Concentrate, Whey Peptides), Natural And Artificial Flavor, Lecithin, Salt, Acesulfame Potassium, Sucralose, Lactase.',
      contains: 'Milk ans soy',
    },
    nutrients: {
      // a ordem dos nutrientes neste objeto determina a ordenação na tabela nutricional renderizada no html
      calories: { unit: 'kcal', value: 120 },
      carbohydrate: { unit: 'g', value: 4 },
      protein: { unit: 'g', value: 24 },
      totalFat: { unit: 'g', value: 1 },
      saturatedFat: { unit: 'g', value: 0.5 },
      transFat: { unit: 'g', value: 0 },
      dietaryFibers: { unit: 'g', value: 0 },
      sodium: { unit: 'mg', value: 105 },
      cholesterol: { unit: 'mg', value: 0.035 },
    },
  },
  {
    id: 2,
    description: {
      name: 'SYNTHA-6 WHEY PROTEIN POWDER',
      brand: 'BSN',
      category: 'protein',
      subCategory: 'whey protein',
      flavor: 'Vanilla Ice Cream',
      size: 2200,
      servingSize: 47,
      infos: [
        'Not a significant source of trans fat and vitamin D.',
        '* The % Daily Value tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice',
      ],
      ingredients:
        'Protein Matrix comprised of (Whey Protein Concentrate, Whey Protein Isolate, Calcium Caseinate, Micellar Casein, Milk Protein Isolate, Egg Albumin, Glutamine Peptides), Polydextrose, Sunflower Creamer (Sunflower Oil, Corn Syrup Solids, Sodium Caseinate, Mono- And Diglycerides, Dipotassium Phosphate, Tricalcium Phosphate, Soy Lecithin, Tocopherols), Natural and Artificial Flavor, MCT Powder (Medium Chain Triglycerides, Nonfat Dry Milk, Disodium Phosphate, Silicon Dioxide), Lecithin, Cellulose Gum, Salt, Yellow 5, Sucralose, Acesulfame Potassium, Papain, Bromelain.',
      contains: 'Egg, Milk, Soy, and Wheat.',
    },
    nutrients: {
      // a ordem dos nutrientes neste objeto determina a ordenação na tabela nutricional renderizada no html
      calories: { unit: 'kcal', value: 200 },
      carbohydrate: { unit: 'g', value: 15 },
      protein: { unit: 'g', value: 22 },
      totalFat: { unit: 'g', value: 6 },
      saturatedFat: { unit: 'g', value: 2 },
      transFat: { unit: 'g', value: 0 },
      dietaryFibers: { unit: 'g', value: 1 },
      sodium: { unit: 'mg', value: 22 },
      calcium: { unit: 'mg', value: 150 },
      cholesterol: { unit: 'mg', value: 55 },
      iron: { unit: 'mg', value: 0.011 },
      potassium: { unit: 'mg', value: 3 },
      phosphorus: { unit: 'mg', value: 150 },
      magnesium: { unit: 'mg', value: 24 },
    },
  },
  {
    id: 3,
    description: {
      name: 'NESCAU',
      brand: 'NESTLÉ',
      category: 'achocolatado',
      subCategory: 'achocolatado em pó',
      flavor: 'Chocolate',
      size: 400,
      servingSize: 20,
      infos: [
        'Not a significant source of trans fat and vitamin D.',
        '* The % Daily Value tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice',
      ],
      ingredients:
        'Açúcar, cacau em pó, maltodextrina, minerais [cálcio (carbonato de cálcio) e ferro (pirofosfato férrico)], soro de leite em pó, vitaminas [vitamina C (ácido L-ascórbico), niacina (nicotinamida), vitamina B2 (riboflavina), vitamina A (acetato de retinila), vitamina B6 (cloridrato de piridoxina), vitamina D (colecalciferol) e vitamina B12 (cianocobalamina)], emulsificante lecitina de soja e aromatizante.',
      contains: 'Egg, Milk, Soy, and Wheat.',
    },
    nutrients: {
      // a ordem dos nutrientes neste objeto determina a ordenação na tabela nutricional renderizada no html
      calories: { unit: 'kcal', value: 73 },
      carbohydrate: { unit: 'g', value: 17 },
      protein: { unit: 'g', value: 0.6 },
      totalFat: { unit: 'g', value: 0 },
      saturatedFat: { unit: 'g', value: 0 },
      transFat: { unit: 'g', value: 0 },
      dietaryFibers: { unit: 'g', value: 0.9 },
      sodium: { unit: 'mg', value: 12 },
      niacin: { unit: 'mg', value: 3 },
      vitaminB12: { unit: 'mcg', value: 0.45 },
      vitaminB6: { unit: 'mg', value: 0.25 },
      vitaminC: { unit: 'mg', value: 8.4 },
      vitaminD: { unit: 'mcg', value: 0.95 },
      riboflavin: { unit: 'mg', value: 0.25 },
      calcium: { unit: 'mg', value: 420 },
      totalSugars: { unit: 'g', value: 15 },
    },
  },
]

export default powders
