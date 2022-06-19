<template>
  <div class="nutritional-facts-table__header">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NutritionalFactsTableHeader",
});
</script>

<style scoped lang="scss">
.header {
  display: flex;
  flex-flow: column;
}
</style>
