<template>
  <div class="circular-chart">
    <CircularSvg :percentage="maxLimit" />
    <span class="circular-chart__percent">{{ Math.round(maxLimit) }}</span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Circular",
  props: {
    percentage: { type: Number, required: true },
  },
  computed: {
    maxLimit() {
      return this.percentage <= 100 ? this.percentage : 100;
    },
  },
});
</script>

<style lang="scss" scoped>
.circular-chart {
  width: 100%;
  font-size: 16px;
  max-width: 150px;
  margin: 0 auto;
  animation: fade 1s;
  transition: 1s ease all;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 1fr auto 1fr;
  align-content: center;

  &__percent {
    grid-column: 2 / -2;
    grid-row: 2 / -2;
    font-size: 30px;
    font-weight: bold;
    display: block;
    position: relative;

    &:after {
      content: "%";
      position: absolute;
      bottom: 5px;
      right: -18px;
      font-size: 18px;
    }
  }
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
