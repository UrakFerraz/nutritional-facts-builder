<template>
  <chart-box>
    <Circular :percentage="nutrient.percentage" />
    <p class="subtitle">{{ nutrient.name }}</p>
  </chart-box>
</template>

<script lang="ts">
import Vue from "vue";
import { PropType } from "vue-demi";

export type NutrientInfoProps = {
  name: string;
  percentage: number;
};

export default Vue.extend({
  name: "CircularSubtitled",
  props: {
    nutrient: {
      type: Object as PropType<NutrientInfoProps>,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.subtitle {
  font-size: 16px;
  text-align: center;
  flex: 1;
}
</style>
