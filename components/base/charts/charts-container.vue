<template>
  <div class="charts">
    <slot></slot>
  </div>
</template>

<style scoped>
.charts {
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
</style>
