<template>
  <div class="nutritional-facts-table">
    <nutritional-facts-table-container>
      <nutritional-facts-table-header>
        <nutritional-facts-table-line>
          <h2>{{ nutritionalFacts.description.name }}</h2>
        </nutritional-facts-table-line>
        <nutritional-facts-table-line>
          <h2>Tamanho:</h2>
          <h2
            v-if="
              nutritionalFacts.description.size !== undefined &&
              nutritionalFacts.description.size < 1000
            "
          >
            {{ nutritionalFacts.description.size }} g
          </h2>
          <h2 v-else-if="nutritionalFacts.description.size !== undefined">
            {{ nutritionalFacts.description.size / 1000 }} kg
          </h2>
        </nutritional-facts-table-line>
        <nutritional-facts-table-line
          v-if="
            nutritionalFacts.description.size !== undefined &&
            nutritionalFacts.description.servingSize !== undefined
          "
        >
          <h2>Total de porções:</h2>
          <h2>
            {{
              Math.floor(
                nutritionalFacts.description.size /
                  nutritionalFacts.description.servingSize
              )
            }}
            porções
          </h2>
        </nutritional-facts-table-line>
        <nutritional-facts-table-line>
          <h1 class="nutritional-facts-table__line--title">Informação Nutricional</h1>
        </nutritional-facts-table-line>
        <nutritional-facts-table-line>
          <h2>Porção:</h2>
          <h2>{{ nutritionalFacts.description.servingSize }} g</h2>
        </nutritional-facts-table-line>
      </nutritional-facts-table-header>
      <nutritional-facts-table-body>
        <nutritional-facts-table-line>
          <p>Quantidade por porção</p>
          <p>VD*</p>
        </nutritional-facts-table-line>
        <nutritional-facts-table-line
          v-for="(nutrient, index) in nutritionalFacts.nutrients"
          :key="index"
          :type="'nutrient'"
        >
          <p v-if="nutrient">{{ nutrient.name }}</p>
          <p v-if="nutrient && nutrient.unit === 'kcal'">
            {{
              `${nutrient.value} kcal / ${Math.round(Number(nutrient.value) * 4.184)} kJ`
            }}
          </p>
          <p v-if="nutrient && nutrient.unit !== 'kcal'">
            {{ `${nutrient.value} ${nutrient.unit}` }}
          </p>
          <p v-if="nutrient && nutrient.vd === '**'">{{ nutrient.vd }}</p>
          <p v-else-if="nutrient">{{ nutrient.vd }} %</p>
        </nutritional-facts-table-line>
        <nutritional-facts-table-line
          v-if="nutritionalFacts.description.infos !== undefined"
          :type="'infos'"
        >
          <span v-for="(info, index) in nutritionalFacts.description.infos" :key="index">
            {{ info }}
          </span>
        </nutritional-facts-table-line>
        <nutritional-facts-table-line :type="'infos'">
          <span
            ><strong>Ingredientes:</strong>
            {{ nutritionalFacts.description.ingredients }}</span
          >
        </nutritional-facts-table-line>
      </nutritional-facts-table-body>
    </nutritional-facts-table-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { PropType } from "vue-demi";
import { PowderInterface } from "~/composables/interfaces/powder";

export default Vue.extend({
  props: {
    nutritionalFacts: {
      type: Object as PropType<PowderInterface>,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.nutritional-facts-table {
  padding: 10px;

  @media screen and (min-width: 768px) {
    padding: 20px;
  }
}
</style>
