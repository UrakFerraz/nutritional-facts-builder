<template>
  <div class="nutritional-facts-table__container">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NutritionalFactsTableContainer",
});
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-flow: column;
  padding: 10px;
}
</style>
