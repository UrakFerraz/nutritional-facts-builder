<template>
  <div>
    <ChartsGrid :nutrients="disassembledNutrients" />
    <NutritionalFactsTable :nutritional-facts="nutritionalFacts" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { NutritionalFactsBuilder } from "~/modules/nutritional-facts/builder/nutritional-facts-builder";
import CarbohydrateServing from "~/modules/nutrients/disassembler/nutrient-serving-carbo";
import ProteinServing from "~/modules/nutrients/disassembler/nutrient-serving-protein";
import foodsDatabase from "~/static/mocks/foods-database";

const nutritionalValueStructure = (routeParamsId: string) => {
  return foodsDatabase.find((item) => item.id === Number(routeParamsId));
};

export default Vue.extend({
  data() {
    return {
      nutritionalFacts: new NutritionalFactsBuilder(
        nutritionalValueStructure(this.$nuxt.$route.params.id)!
      )
        .main()
        .getNutritionalFacts(),
    };
  },
  computed: {
    disassembledNutrients() {
      return {
        carbohydrate: CarbohydrateServing.getSpecification(
          nutritionalValueStructure(this.$nuxt.$route.params.id)!
        ),
        protein: ProteinServing.getSpecification(
          nutritionalValueStructure(this.$nuxt.$route.params.id)!
        ),
      };
    },
  },
});
</script>

<style lang="scss" scoped></style>
