/* eslint-disable no-console */
<template>
  <div>
    <div class="nutritional-facts-table">
      <div class="nutritional-facts-table__container">
        <div class="nutritional-facts-table__header">
          <h1>Informação Nutricional</h1>
          <div class="nutritional-facts-table__line">
            <h2>{{ nutritionalFacts.powderWithVD.description.name }}</h2>
          </div>
          <div class="nutritional-facts-table__line">
            <h2>Tamanho:</h2>
            <h2>{{ nutritionalFacts.powderWithVD.description.size }}</h2>
          </div>
          <div class="nutritional-facts-table__line">
            <h2>Dose:</h2>
            <h2>{{ nutritionalFacts.powderWithVD.description.servingSize }}g</h2>
          </div>
          <div class="nutritional-facts-table__line">
            <h2>Total de doses:</h2>
            <h2>{{ nutritionalFacts.powderWithVD.description.servings }} doses</h2>
          </div>
        </div>
        <div class="nutritional-facts-table__principal-info">
          <div class="nutritional-facts-table__line">
            <p>Quantidade por porção</p>
            <p>VD*</p>
          </div>
          <div
            v-for="(nutrient, index) in nutritionalFacts.powderWithVD.nutrients"
            :key="index"
            class="nutritional-facts-table__line--nutrient"
          >
            <p v-if="nutrient">{{ nutrient.name }}</p>
            <p v-if="nutrient">{{ `${nutrient.value} ${nutrient.unit}` }}</p>
            <p v-if="nutrient && nutrient.vd === '**'">{{ nutrient.vd }}</p>
            <p v-else-if="nutrient">{{ nutrient.vd }}%</p>
          </div>
          <div
            v-if="nutritionalFacts.setNotSignificantNutrient() !== undefined"
            class="nutritional-facts-table__line--infos"
          >
            <span>
              {{ nutritionalFacts.setNotSignificantNutrient() }}
            </span>
          </div>
          <div class="nutritional-facts-table__line--infos">
            <span
              >Ingredientes:
              {{ nutritionalFacts.powderWithVD.description.ingredients }}</span
            >
          </div>
          <div
            v-if="nutritionalFacts.powderWithVD.description.contains !== undefined"
            class="nutritional-facts-table__line--infos"
          >
            <span
              v-for="item in nutritionalFacts.powderWithVD.description.contains"
              :key="item"
            >
              {{ item + ", " }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import wheyProtein from "~/static/mocks/whey-protein-mock";
import { PowderNutritionalFacts } from "~/composables/nutritional-facts/powder/nutritional-facts-setter";
import NutrientsVD from "~/composables/nutritional-facts/nutrients/nutrients-vd-setter";
import PowderDescription from "~/composables/nutritional-facts/description/powder-description-setter";
export default Vue.extend({
  data() {
    return {
      powder: wheyProtein[Number(this.$nuxt.$route.params.id)],
      nutritionalFacts: new PowderNutritionalFacts(
        wheyProtein[Number(this.$nuxt.$route.params.id)],
        new NutrientsVD(wheyProtein[Number(this.$nuxt.$route.params.id)].nutrients),
        new PowderDescription(
          wheyProtein[Number(this.$nuxt.$route.params.id)].description
        )
      ),
    };
  },
  created() {
    this.nutritionalFacts.setPowderWithVD();
  },
});
</script>

<style lang="scss" scoped>
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
    flex-basis: 80px;
    text-align: right;
  }
}
@mixin row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 10px;
  &:hover {
    background: rgba($color: rgb(188, 206, 218), $alpha: 0.5);
  }
}
.nutritional-facts-table {
  padding: 20px;
  &__container {
    display: flex;
    flex-flow: column;
    padding: 10px;
  }
  &__header {
    display: flex;
    flex-flow: column;
  }
  &__line {
    &--nutrient {
      &:nth-of-type(even) {
        background: rgba($color: #000, $alpha: 0.1);
      }
      @include nutrientRow;
      @include row;
    }
    @include nutrientRow;
    &--infos {
      margin: 10px 0;
      padding: 10px 0;
      border-top: 1px solid rgb(112, 110, 133);
      border-bottom: 1px solid rgb(112, 110, 133);
    }
    @include row;
  }
}
</style>
