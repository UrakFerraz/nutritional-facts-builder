<template>
  <div :class="`nutritional-facts-table__${className}`">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { PropType } from "vue-demi";

export type LineType = "nutrient" | "title" | "infos" | undefined;

export default Vue.extend({
  name: "NutritionalFactsTableLine",
  props: {
    type: {
      type: String as PropType<LineType>,
      required: false,
      default: undefined,
    },
  },
  computed: {
    className() {
      if (this.type === "nutrient") {
        return "line--nutrient";
      }
      if (this.type === "title") {
        return "line--title";
      }
      if (this.type === "infos") {
        return "line--infos";
      }
      return "line";
    },
  },
});
</script>

<style scoped lang="scss">
@mixin nutrientRow {
  p:nth-child(1) {
    flex-grow: 1;
    text-align: left;
  }
  p:nth-child(2) {
    flex-grow: 2;
    text-align: right;
  }
  p:last-child {
    flex-basis: 60px;
    text-align: right;
    @media screen and (min-width: 768px) {
      flex-basis: 80px;
    }
  }
}
@mixin row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px;
  &:hover {
    background: rgba($color: #000, $alpha: 0.1);
  }
}
.nutritional-facts-table__line {
  &--nutrient {
    &:nth-of-type(even) {
      background: rgba($color: rgb(188, 206, 218), $alpha: 0.2);
    }
    @include nutrientRow;
    @include row;
  }
  @include nutrientRow;
  &--infos {
    padding: 10px 0;
    border-bottom: 1px solid rgb(112, 110, 133);
  }
  @include row;
  &--title {
    border-top: 1px solid rgba(112, 110, 133, 0.5);
    margin-top: 20px;
    padding-top: 10px;
    width: 100%;
  }
}
</style>
