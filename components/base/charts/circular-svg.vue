<template>
  <svg width="100%" height="100%" viewBox="0 0 40 40" class="circular">
    <circle class="circular-ring" cx="20" cy="20" r="15" fill="transparent"></circle>
    <circle
      class="circular-segment"
      cx="20"
      cy="20"
      r="15"
      fill="transparent"
      :stroke-dasharray="percentageStroke"
    ></circle>
  </svg>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CircularSvg",
  props: {
    percentage: { type: Number, required: true },
  },
  data() {
    return {};
  },
  computed: {
    percentageStroke() {
      return `${this.percentage} ${100 - Number(this.percentage)}`;
    },
  },
});
</script>

<style scoped lang="scss">
.circular {
  display: flex;
  position: relative;
  align-content: center;
  grid-column: 1 / -1;
  grid-row: 1 / -1;

  &-ring {
    stroke: #ebebeb;
    stroke-width: 2;
  }

  &-segment {
    transition: 1s ease all;
    stroke-width: 2;
    transform-origin: center;
    stroke: #6c8a9b;
    animation: circular 3s;
    animation-fill-mode: both;
    stroke-dashoffset: 25;
    transform: rotate(342deg);
  }
}

@keyframes circular {
  0% {
    stroke-dasharray: 0, 100;
  }
}
</style>
