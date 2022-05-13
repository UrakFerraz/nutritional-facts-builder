<template>
  <div>
    <div class="nutritional-facts-table">
      <div class="nutritional-facts-table__container">
        <div class="nutritional-facts-table__header">
          <h1>Informação Nutricional</h1>
          <div class="nutritional-facts-table__line">
            <h2>{{ convertedValues().description.name }}</h2>
          </div>
          <div class="nutritional-facts-table__line">
            <h2>Tamanho:</h2>
            <h2>{{ convertedValues().description.size }}</h2>
          </div>
          <div class="nutritional-facts-table__line">
            <h2>Dose:</h2>
            <h2>{{ convertedValues().description.servingSize }}g</h2>
          </div>
          <div class="nutritional-facts-table__line">
            <h2>Total de doses:</h2>
            <h2>{{ convertedValues().description.servings }} doses</h2>
          </div>
        </div>
        <div class="nutritional-facts-table__principal-info">
          <div class="nutritional-facts-table__line">
            <p>Quantidade por porção</p>
            <p>VD*</p>
          </div>
          <div
            v-for="(ingredient, index) in convertedValues()"
            :key="index"
            class="nutritional-facts-table__line"
          >
            <p>{{ ingredient }}</p>
          </div>
          <div class="nutritional-facts-table__line--infos">
            <span
              v-for="(info, index) in convertedValues().description.infos"
              :key="index"
            >
              {{ info }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { WheyValuesConverted } from "../composables/values-converter/values-converter";
import wheyProtein from "~/static/mocks/whey-protein-mock";
export default Vue.extend({
  data() {
    return {
      whey: new WheyValuesConverted(wheyProtein[1]),
    };
  },
  methods: {
    convertedValues() {
      this.whey.convertValues();
      return this.whey.convertedWhey;
    },
    convertCaloriesTokJ() {
      const kJ = 4.184;
      // eslint-disable-next-line no-console
      console.log(this.convertedValues().nutrients);
      return `${this.convertedValues().nutrients.calories.value} cal / ${Math.round(
        Number(this.convertedValues().nutrients.calories.value) * kJ
      )} kJ`;
    },
  },
});
</script>

<style lang="scss" scoped>
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
    &--infos {
      margin: 10px 0;
      padding: 10px 0;
      border-top: 1px solid white;
      border-bottom: 1px solid white;
    }
  }
}
</style>
