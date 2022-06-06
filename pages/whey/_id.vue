/* eslint-disable no-console */ /* eslint-disable no-console */
<template>
  <div v-if="nutritionalFacts.description !== null">
    <div>
      <Donut :percentage="Math.round(disassembledProtein.nutrientInServingSize)" />
    </div>
    <div class="nutritional-facts-table">
      <div class="nutritional-facts-table__container">
        <div class="nutritional-facts-table__header">
          <div class="nutritional-facts-table__line">
            <h2>{{ nutritionalFacts.description.name }}</h2>
          </div>
          <div class="nutritional-facts-table__line">
            <h2>Tamanho:</h2>
            <h2
              v-if="
                nutritionalFacts.description.size !== undefined &&
                nutritionalFacts.description.size < 1000
              "
            >
              {{ nutritionalFacts.description.size }}
            </h2>
            <h2 v-else-if="nutritionalFacts.description.size !== undefined">
              {{ nutritionalFacts.description.size / 1000 }} kg
            </h2>
          </div>
          <div class="nutritional-facts-table__line">
            <h2>Total de porções:</h2>
            <h2>{{ nutritionalFacts.description.servings }} doses</h2>
          </div>
          <div class="nutritional-facts-table__line">
            <h1 class="nutritional-facts-table__line--title">Informação Nutricional</h1>
          </div>
          <div class="nutritional-facts-table__line">
            <h2>Porção:</h2>
            <h2>{{ nutritionalFacts.description.servingSize }}g</h2>
          </div>
        </div>
        <div class="nutritional-facts-table__principal-info">
          <div class="nutritional-facts-table__line">
            <p>Quantidade por porção</p>
            <p>VD*</p>
          </div>
          <div
            v-for="(nutrient, index) in nutritionalFacts.nutrients"
            :key="index"
            class="nutritional-facts-table__line--nutrient"
          >
            <p v-if="nutrient">{{ nutrient.name }}</p>
            <p v-if="nutrient">{{ `${nutrient.value} ${nutrient.unit}` }}</p>
            <p v-if="nutrient && nutrient.vd === '**'">{{ nutrient.vd }}</p>
            <p v-else-if="nutrient">{{ nutrient.vd }} %</p>
          </div>
          <div
            v-if="nutritionalFacts.description.infos !== undefined"
            class="nutritional-facts-table__line--infos"
          >
            <span
              v-for="(info, index) in nutritionalFacts.description.infos"
              :key="index"
            >
              {{ info }}
            </span>
          </div>
          <div class="nutritional-facts-table__line--infos">
            <span>Ingredientes: {{ nutritionalFacts.description.ingredients }}</span>
          </div>
          <div>
            <p>
              Proteína por dose:
              {{ disassembledProtein.nutrientInServingSize }} %
            </p>
            <p>
              Preço da proteína por dose: R$
              {{ disassembledProtein.nutrientPriceInServingSize }}
            </p>
            <p>Preço da dose: R$ {{ disassembledProtein.servingSizePrice }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Donut from "../../components/charts/Donut.vue";
import wheyProtein from "~/static/mocks/whey-protein-mock";
import { PowderNutritionalFactsSetter } from "~/composables/nutritional-facts/powder/nutritional-facts-setter";
import NutrientDisassemble from "~/composables/disassemble/nutrient";
export default Vue.extend({
  components: { Donut },
  data() {
    return {
      nutritionalFacts: new PowderNutritionalFactsSetter(
        wheyProtein[Number(this.$nuxt.$route.params.id)]
      )
        .init()
        .getNutritionalFacts(),
    };
  },
  computed: {
    disassembledProtein() {
      const protein = new NutrientDisassemble(
        wheyProtein[Number(this.$nuxt.$route.params.id)],
        "protein",
        538
      );
      protein.disjoin();
      return protein.context;
    },
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
.nutritional-facts-table {
  padding: 10px;
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
        background: rgba($color: rgb(188, 206, 218), $alpha: 0.2);
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
    &--title {
      border-top: 1px solid rgba(112, 110, 133, 0.5);
      margin-top: 20px;
      padding-top: 10px;
      width: 100%;
    }
  }
  @media screen and (min-width: 768px) {
    padding: 20px;
  }
}
</style>
