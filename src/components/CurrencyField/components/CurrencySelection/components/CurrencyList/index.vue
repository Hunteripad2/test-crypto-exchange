<template>
  <ul class="w-full h-36 rounded overflow-y-auto">
    <li
      v-bind:key="currency.ticker"
      v-for="currency in currencies"
      class="bg-input h-12 pl-4 flex items-center cursor-pointer hover:bg-highlight"
      @click="this.$emit('chooseCurrency', currency.ticker)"
    >
      <img class="h-1/2" :src="currency.image" />
      <span class="ml-4 leading-none h-3">{{ currency.ticker.toUpperCase() }}</span>
      <span class="ml-4 text-light leading-none h-3">{{ currency.name }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "CurrencyList",
  props: {
    allCurrencies: Array,
    filter: String,
  },
  computed: {
    currencies() {
      return this.filter
        ? this.allCurrencies.filter((currency) =>
            currency.name.includes(this.filter)
          )
        : this.allCurrencies;
    },
  },
};
</script>
