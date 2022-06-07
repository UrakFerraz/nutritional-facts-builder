<template>
  <div class="svg-item">
    <svg width="100%" height="100%" viewBox="0 0 40 40" class="donut">
      <circle
        class="donut-hole"
        cx="20"
        cy="20"
        r="15.91549430918954"
        fill="#fff"
      ></circle>
      <circle
        class="donut-ring"
        cx="20"
        cy="20"
        r="15.91549430918954"
        fill="transparent"
      ></circle>
      <circle
        class="donut-segment"
        cx="20"
        cy="20"
        r="15.91549430918954"
        fill="transparent"
        :stroke-dasharray="percentageStroke"
      ></circle>
    </svg>
    <span class="donut-percent">{{ percentage }}</span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: {
    percentage: { type: Number, required: true, default: 0 },
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

<style lang="scss" scoped>
.svg-item {
  width: 100%;
  font-size: 16px;
  max-width: 150px;
  margin: 0 auto;
  animation: donutfade 1s;
  transition: 1s ease all;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 1fr auto 1fr;
  align-content: center;
  .donut {
    display: flex;
    position: relative;
    align-content: center;
    grid-column: 1 / -1;
    grid-row: 1 / -1;
  }
  .donut-ring {
    stroke: #ebebeb;
    stroke-width: 3.5;
  }
  .donut-segment {
    transition: 1s ease all;
    stroke-width: 3.5;
    transform-origin: center;
    stroke: #6c8a9b;
    animation: donut1 3s;
    animation-fill-mode: both;
    stroke-dashoffset: 25;
  }
}
.donut-percent {
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

@keyframes donutfade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes donut1 {
  0% {
    stroke-dasharray: 0, 100;
  }
}
</style>
