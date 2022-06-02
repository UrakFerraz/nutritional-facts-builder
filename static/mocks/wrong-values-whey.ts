const wrongValuesWheyProtein = {
  id: 2,
  description: {
    name: 'SYNTHA-6 WHEY PROTEIN POWDER',
    brand: 'BSN',
    category: 'protein',
    subCategory: 'whey protein',
    flavor: 'Vanilla Ice Cream',
    size: 2_200,
    // generics search sizes in grams: 100g, 500g, 1000g, 2000g ...
    genericSize: 2000,
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
    calories: { unit: 'kcal', value: 200 },
    carbohydrate: { unit: 'g', value: 0 },
    protein: { unit: 'g', value: 22 },
    totalFat: { unit: 'g', value: 0 },
    saturatedFat: { unit: 'g', value: 0 },
    transFat: { unit: 'g', value: 0 },
    dietaryFibers: { unit: 'g', value: 0 },
    sodium: { unit: 'mg', value: 22 },
    calcium: { unit: 'mg', value: 150 },
    cholesterol: { unit: 'mg', value: 55 },
    iron: { unit: 'mg', value: 0.011 },
    totalSugars: { unit: 'g', value: 2 },
    potassium: { unit: 'mg', value: 3 },
    phosphorus: { unit: 'mg', value: 150 },
    magnesium: { unit: 'mg', value: 24 },
  },
}

export default wrongValuesWheyProtein
