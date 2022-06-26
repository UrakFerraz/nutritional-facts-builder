<template>
  <div>
    <ChartsGrid :nutrients="disassembledNutrients" />
    <NutritionalFactsTable :nutritional-facts="nutritionalFacts" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { NutritionalFactsBuilder } from "~/composables/nutritional-facts/powder/nutritional-facts-builder";
import CarbohydrateServing from "~/composables/disassembled/nutrient-serving-carbo";
import ProteinServing from "~/composables/disassembled/nutrient-serving-protein";
import foodsDatabase from "~/static/mocks/foods-database";

export default Vue.extend({
  data() {
    return {
      nutritionalFacts: new NutritionalFactsBuilder(
        foodsDatabase[Number(this.$nuxt.$route.params.id)]
      )
        .main()
        .getNutritionalFacts(),
    };
  },
  computed: {
    disassembledNutrients() {
      return {
        carbohydrate: CarbohydrateServing.getSpecification(
          foodsDatabase[Number(this.$nuxt.$route.params.id)]
        ),
        protein: ProteinServing.getSpecification(
          foodsDatabase[Number(this.$nuxt.$route.params.id)]
        ),
      };
    },
  },
});
</script>

<style lang="scss" scoped></style>
