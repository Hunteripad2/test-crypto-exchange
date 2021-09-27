<template>
  <div
    v-if="searchIsVisible"
    class="absolute w-full bg-input rounded border border-thick divide-y"
  >
    <Search
      :allCurrencies="allCurrencies"
      @close="this.$emit('close')"
      @search="setFilter"
    />
    <CurrencyList
      :allCurrencies="allCurrencies"
      :filter="filter"
      @chooseCurrency="(ticker) => this.$emit('chooseCurrency', ticker)"
    />
  </div>
</template>

<script>
import Search from "./components/Search";
import CurrencyList from "./components/CurrencyList";

export default {
  name: "CurrencySelection",
  components: {
    Search,
    CurrencyList,
  },
  props: {
    allCurrencies: Array,
    searchIsVisible: Boolean,
  },
  data() {
    return {
      filter: null,
    };
  },
  methods: {
    setFilter(filter) {
      this.filter = filter;
    },
  },
};
</script>
