<template>
  <div>
    <div class="nutritional-facts-table">
      <div class="nutritional-facts-table__container">
        <div class="nutritional-facts-table__header">
          <h1>Informação Nutricional</h1>
          <div class="nutritional-facts-table__line">
            <h2>{{ convertedValues().name }}</h2>
          </div>
          <div class="nutritional-facts-table__line">
            <h2>Tamanho:</h2>
            <h2>{{ convertedValues().size }}</h2>
          </div>
          <div class="nutritional-facts-table__line">
            <h2>Dose:</h2>
            <h2>{{ convertedValues().servingSize }}g</h2>
          </div>
          <div class="nutritional-facts-table__line">
            <h2>Total de doses:</h2>
            <h2>{{ convertedValues().servings }} doses</h2>
          </div>
        </div>
        <div class="nutritional-facts-table__principal-info">
          <div class="nutritional-facts-table__line">
            <p>Quantidade por porção</p>
            <p>VD*</p>
          </div>
          <div class="nutritional-facts-table__line">
            <p>Valor energético:</p>
            <p>
              {{ convertCaloriesTokJ() }}
            </p>
            <p>{{ convertedValues().calories.vd }} %</p>
          </div>
          <div class="nutritional-facts-table__line">
            <p>Carboidratos:</p>
            <p>
              {{
                `${convertedValues().carbohydrate.value} ${
                  convertedValues().carbohydrate.unit
                }`
              }}
            </p>
            <p>{{ convertedValues().carbohydrate.vd }} %</p>
          </div>
          <div class="nutritional-facts-table__line">
            <p>Proteínas:</p>
            <p>
              {{ `${convertedValues().protein.value} ${convertedValues().protein.unit}` }}
            </p>
            <p>{{ convertedValues().protein.vd }} %</p>
          </div>
          <div class="nutritional-facts-table__line">
            <p>Gorduras Totais:</p>
            <p>
              {{
                `${convertedValues().totalFat.value} ${convertedValues().totalFat.unit}`
              }}
            </p>
            <p>{{ convertedValues().totalFat.vd }} %</p>
          </div>
          <div class="nutritional-facts-table__line">
            <p>Gorduras Saturadas:</p>
            <p>
              {{
                `${convertedValues().saturatedFat.value} ${
                  convertedValues().saturatedFat.unit
                }`
              }}
            </p>
            <p>{{ convertedValues().saturatedFat.vd }} %</p>
          </div>
          <div class="nutritional-facts-table__line">
            <p>Gorduras Trans:</p>
            <p>
              {{ `${convertedValues().transFat.value} g` }}
            </p>
            <p>**</p>
          </div>
          <div class="nutritional-facts-table__line">
            <p>Fibra Alimentar:</p>
            <p>
              {{
                `${convertedValues().dietaryFibers.value} ${
                  convertedValues().dietaryFibers.unit
                }`
              }}
            </p>
            <p>{{ convertedValues().dietaryFibers.vd }} %</p>
          </div>
          <div class="nutritional-facts-table__line">
            <p>Sódio:</p>
            <p>
              {{ `${convertedValues().sodium.value} ${convertedValues().sodium.unit}` }}
            </p>
            <p>{{ convertedValues().sodium.vd }} %</p>
          </div>
          <div
            v-if="convertedValues().calcium !== undefined"
            class="nutritional-facts-table__line"
          >
            <p>Cálcio:</p>
            <p>
              {{ `${convertedValues().calcium.value} ${convertedValues().calcium.unit}` }}
            </p>
            <p>{{ convertedValues().calcium.vd }} %</p>
          </div>
          <div
            v-if="convertedValues().potassium !== undefined"
            class="nutritional-facts-table__line"
          >
            <p>Potássio:</p>
            <p>
              {{
                `${convertedValues().potassium.value} ${convertedValues().potassium.unit}`
              }}
            </p>
            <p>{{ convertedValues().potassium.vd }} %</p>
          </div>
          <div
            v-if="convertedValues().iron !== undefined"
            class="nutritional-facts-table__line"
          >
            <p>Ferro:</p>
            <p>
              {{ `${convertedValues().iron.value} ${convertedValues().iron.unit}` }}
            </p>
            <p>{{ convertedValues().iron.vd }} %</p>
          </div>
          <div
            v-if="convertedValues().phosphorus !== undefined"
            class="nutritional-facts-table__line"
          >
            <p>Fósforo:</p>
            <p>
              {{
                `${convertedValues().phosphorus.value} ${
                  convertedValues().phosphorus.unit
                }`
              }}
            </p>
            <p>{{ convertedValues().phosphorus.vd }} %</p>
          </div>
          <div
            v-if="convertedValues().magnesium !== undefined"
            class="nutritional-facts-table__line"
          >
            <p>Magnésio:</p>
            <p>
              {{
                `${convertedValues().magnesium.value} ${convertedValues().magnesium.unit}`
              }}
            </p>
            <p>{{ convertedValues().magnesium.vd }} %</p>
          </div>
          <div class="nutritional-facts-table__line--infos">
            <span v-for="(info, index) in convertedValues().infos" :key="index">
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
      return `${this.convertedValues().calories.value} cal / ${Math.round(
        this.convertedValues().calories.value! * kJ
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
