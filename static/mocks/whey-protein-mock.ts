const wheyProtein = [
  {
    id: 1,
    description: {
      name: 'GOLD STANDARD 100% WHEY PROTEIN',
      brand: 'OPTIMUM NUTRITION',
      category: 'protein',
      subCategory: 'whey protein',
      flavor: 'Vanilla Ice Cream',
      size: 2200,
      // servings per container
      servings: 73,
      // Serving Size About 1 Scoop
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
      totalSugars: { unit: 'g', value: 1 },
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
      // servings per container
      servings: 48,
      // Serving Size About 1 Scoop
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
      totalSugars: { unit: 'g', value: 2 },
      iron: { unit: 'mg', value: 0.011 },
      potassium: { unit: 'mg', value: 3 },
      phosphorus: { unit: 'mg', value: 150 },
      magnesium: { unit: 'mg', value: 24 },
    },
  },
]

export default wheyProtein
