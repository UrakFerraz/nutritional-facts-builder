<template>
  <div class="curcular-chart">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.curcular-chart {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  padding: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.07), 0 16px 32px rgba(0, 0, 0, 0.04);
  border-radius: 0 0 10px 10px;
}
</style>
