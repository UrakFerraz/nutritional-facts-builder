const wheyWrongUnits = {
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
    calories: { unit: 'kcal', value: 200 },
    carbohydrate: { unit: 'g', value: 15 },
    protein: { unit: 'g', value: 22 },
    totalFat: { unit: 'mg', value: 6000 },
    saturatedFat: { unit: 'mcg', value: 2_000_000 },
    transFat: { unit: 'g', value: 0 },
    dietaryFibers: { unit: 'mg', value: 1000 },
    sodium: { unit: 'mcg', value: 22_000 },
    calcium: { unit: 'g', value: 0.15 },
    cholesterol: { unit: 'mcg', value: 55_000 },
    iron: { unit: 'mg', value: 0.011 },
    potassium: { unit: 'mg', value: 3 },
    phosphorus: { unit: 'mg', value: 150 },
    magnesium: { unit: 'mg', value: 24 },
  },
}

export default wheyWrongUnits
