<template>
  <div>
    <ChartsGrid :nutrients="disassembledNutrients" />
    <NutritionalFactsTable :nutritional-facts="nutritionalFacts" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import powders from "~/static/mocks/powders";
import { PowderNutritionalFactsSetter } from "~/composables/nutritional-facts/powder/nutritional-facts-setter";
import CarbohydrateServing from "~/composables/disassembled/nutrient-serving-carbo";
import ProteinServing from "~/composables/disassembled/nutrient-serving-protein";

export default Vue.extend({
  data() {
    return {
      nutritionalFacts: new PowderNutritionalFactsSetter(
        powders[Number(this.$nuxt.$route.params.id)]
      )
        .init()
        .getNutritionalFacts(),
    };
  },
  computed: {
    disassembledNutrients() {
      return {
        carbohydrate: CarbohydrateServing.getSpecification(
          powders[Number(this.$nuxt.$route.params.id)]
        ),
        protein: ProteinServing.getSpecification(
          powders[Number(this.$nuxt.$route.params.id)]
        ),
      };
    },
  },
});
</script>

<style lang="scss" scoped></style>
