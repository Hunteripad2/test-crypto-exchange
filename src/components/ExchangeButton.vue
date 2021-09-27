<template>
  <div class="relative sm:ml-8 sm:w-auto w-full sm:mt-0 mt-4">
    <button
      type="submit"
      class="sm:w-52 w-full h-12 bg-primary hover:bg-primary-highlight rounded font-bold text-white"
    >
      EXCHANGE
    </button>
    <span
      v-if="errorText"
      class="absolute top-14 w-full left-0 text-error text-center"
      >{{ errorText }}</span
    >
  </div>
</template>

<script>
export default {
  name: "ExchangeButton",
  props: {
    firstCurrency: Object,
    secondCurrency: Object,
    minimalExchangeAmount: Number,
    estimatedExchangeAmount: Number,
    exchangeAmount: Number,
  },
  computed: {
    errorText() {
      if (this.firstCurrency && this.secondCurrency) {
        if (
          this.exchangeAmount &&
          this.exchangeAmount < this.minimalExchangeAmount
        ) {
          return "Exchange amount is below minimal";
        }
        if (!this.minimalExchangeAmount || !this.estimatedExchangeAmount) {
          return "This pair is disabled now";
        }
      }
      return null;
    },
  },
};
</script>
