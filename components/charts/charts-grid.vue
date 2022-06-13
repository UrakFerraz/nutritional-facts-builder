<template>
  <charts-container>
    <CircularSubtitled
      :nutrient="{
        name: 'proteína',
        percentage: nutrients.protein.percentageInServingSize,
      }"
    />
    <CircularSubtitled
      :nutrient="{
        name: 'carboidrato',
        percentage: nutrients.carbohydrate.percentageInServingSize,
      }"
    />
  </charts-container>
</template>

<script lang="ts">
import Vue from "vue";
import { PropType } from "vue-demi";

export type NutrientsInfo = {
  carbohydrate: {
    percentageInServingSize: number;
  };
  protein: {
    percentageInServingSize: number;
  };
};

export default Vue.extend({
  props: {
    nutrients: {
      type: Object as PropType<NutrientsInfo>,
      required: true,
    },
  },
});
</script>

<style scoped></style>
