<template>
  <div class="relative w-full h-12 z-10">
    <div
      class="absolute flex w-full h-full bg-input rounded border border-primary divide-x"
    >
      <input
        :disabled="!canChangeAmount"
        :value="minimalExchangeAmount || estimatedExchangeAmount || '-'"
        type="text"
        class="sm:w-3/4 w-3/5 bg-transparent px-4"
        @change="this.$emit('exchangeAmountChange', $event.target.value)"
      />
      <Currency @click="openSearch()" :currentCurrency="currentCurrency" />
    </div>
    <CurrencySelection
      :allCurrencies="allCurrencies"
      :searchIsVisible="searchIsVisible"
      @chooseCurrency="(ticker) => handleChooseCurrency(ticker)"
      @close="closeSearch()"
    />
  </div>
</template>

<script>
import Currency from "./components/Currency";
import CurrencySelection from "./components/CurrencySelection";

export default {
  name: "CurrencyField",
  components: {
    Currency,
    CurrencySelection,
  },
  props: {
    allCurrencies: Array,
    currentCurrency: Object,
    minimalExchangeAmount: Number,
    estimatedExchangeAmount: Number,
    canChangeAmount: Boolean,
  },
  data() {
    return {
      searchIsVisible: false,
    };
  },
  methods: {
    openSearch() {
      this.searchIsVisible = true;
    },
    closeSearch() {
      this.searchIsVisible = false;
    },
    handleChooseCurrency(ticker) {
      this.$emit("chooseCurrency", ticker);
      this.searchIsVisible = false;
    },
  },
};
</script>
