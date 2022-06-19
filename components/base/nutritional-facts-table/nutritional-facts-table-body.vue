<template>
  <div class="nutritional-facts-table__body">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NutritionalFactsTableBody",
});
</script>

<style scoped lang="scss"></style>
