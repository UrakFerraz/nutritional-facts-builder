/* eslint-disable no-console */
<template>
  <div>
    <div class="nutritional-facts-table">
      <div class="nutritional-facts-table__container">
        <div class="nutritional-facts-table__header">
          <h1>Informação Nutricional</h1>
          <div class="nutritional-facts-table__line">
            <h2>{{ whey.convertedWhey.description.name }}</h2>
          </div>
          <div class="nutritional-facts-table__line">
            <h2>Tamanho:</h2>
            <h2>{{ whey.convertedWhey.description.size }}</h2>
          </div>
          <div class="nutritional-facts-table__line">
            <h2>Dose:</h2>
            <h2>{{ whey.convertedWhey.description.servingSize }}g</h2>
          </div>
          <div class="nutritional-facts-table__line">
            <h2>Total de doses:</h2>
            <h2>{{ whey.convertedWhey.description.servings }} doses</h2>
          </div>
        </div>
        <div class="nutritional-facts-table__principal-info">
          <div class="nutritional-facts-table__line">
            <p>Quantidade por porção</p>
            <p>VD*</p>
          </div>
          <div
            v-for="(nutrient, index) in whey.convertedWhey.nutrients"
            :key="index"
            class="nutritional-facts-table__line--nutrient"
          >
            <p v-if="nutrient">{{ nutrient.name }}</p>
            <p v-if="nutrient">{{ `${nutrient.value} ${nutrient.unit}` }}</p>
            <p v-if="nutrient && nutrient.vd === '**'">{{ nutrient.vd }}</p>
            <p v-else-if="nutrient">{{ nutrient.vd }}%</p>
          </div>
          <div class="nutritional-facts-table__line--infos">
            <span
              v-for="(info, index) in whey.convertedWhey.description.infos"
              :key="index"
            >
              {{ info }}
            </span>
          </div>
          <div class="nutritional-facts-table__line--infos">
            <span>Ingredientes: {{ whey.listOfingredients() }}</span>
          </div>
          <div
            v-if="whey.listContains() !== undefined"
            class="nutritional-facts-table__line--infos"
          >
            <span v-if="whey.listContains()">Contém: {{ whey.listContains() }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { WheyValuesConverted } from "../../composables/values-converter/values-converter";
import wheyProtein from "~/static/mocks/whey-protein-mock";
export default Vue.extend({
  data() {
    return {
      whey: new WheyValuesConverted(wheyProtein[Number(this.$nuxt.$route.params.id)]),
    };
  },
  created() {
    this.whey.convertValues();
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
