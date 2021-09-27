<template>
  <div class="relative w-full h-12 z-10">
    <div
      class="absolute flex items-center w-full h-full bg-input rounded border border-primary"
    >
      <input
        :disabled="!canChangeAmount"
        :value="exchangeAmount || estimatedExchangeAmount || '-'"
        type="text"
        class="sm:w-3/4 w-3/5 bg-transparent px-4 h-full"
        @change="this.$emit('exchangeAmountChange', $event.target.value)"
      />
      <div
        class="absolute h-3/5 sm:w-3/4 w-3/5 border-r border-primary left-0 pointer-events-none"
      />
      <SelectButton @click="openSearch()" :currentCurrency="currentCurrency" />
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
import SelectButton from "./components/SelectButton";
import CurrencySelection from "./components/CurrencySelection";

export default {
  name: "CurrencyField",
  components: {
    SelectButton,
    CurrencySelection,
  },
  props: {
    allCurrencies: Array,
    currentCurrency: Object,
    exchangeAmount: Number,
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
