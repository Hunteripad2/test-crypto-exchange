<template>
  <div
    class="sm:px-desktop px-mobile sm:pt-60 pt-16 font-vollkorn text-primary"
  >
    <Title />
    <div
      class="mt-16 flex sm:flex-row flex-col sm:items-center items-end justify-between"
    >
      <CurrencyField
        :allCurrencies="allCurrencies"
        :currentCurrency="firstCurrency"
        :exchangeAmount="exchangeAmount"
        :canChangeAmount="!!minimalExchangeAmount"
        @chooseCurrency="setCurrencyFirst"
        @exchangeAmountChange="handleExchangeAmountChange"
      />
      <SwapButton @swapCurrencies="swapCurrencies()" />
      <CurrencyField
        :allCurrencies="allCurrencies"
        :currentCurrency="secondCurrency"
        :estimatedExchangeAmount="estimatedExchangeAmount"
        :canChangeAmount="false"
        @chooseCurrency="setCurrencySecond"
      />
    </div>
    <div class="sm:mt-8 mt-12 flex sm:flex-row flex-col items-end justify-end">
      <Address />
      <ExchangeButton
        :firstCurrency="firstCurrency"
        :minimalExchangeAmount="minimalExchangeAmount"
        :secondCurrency="secondCurrency"
        :estimatedExchangeAmount="estimatedExchangeAmount"
        :exchangeAmount="exchangeAmount"
      />
    </div>
  </div>
</template>

<script>
import Title from "./components/Title";
import CurrencyField from "./components/CurrencyField";
import SwapButton from "./components/SwapButton";
import Address from "./components/Address.vue";
import ExchangeButton from "./components/ExchangeButton.vue";

const apiKey =
  "c9155859d90d239f909d2906233816b26cd8cf5ede44702d422667672b58b0cd";

export default {
  name: "App",
  components: {
    Title,
    CurrencyField,
    SwapButton,
    Address,
    ExchangeButton,
  },
  data() {
    return {
      allCurrencies: [],
      firstCurrency: null,
      secondCurrency: null,
      minimalExchangeAmount: null,
      estimatedExchangeAmount: null,
      exchangeAmount: null,
    };
  },
  watch: {
    firstCurrency: "handleCurrencyChange",
    secondCurrency: "handleCurrencyChange",
  },
  methods: {
    setCurrencyFirst(ticker) {
      this.firstCurrency = this.getCurrencyByTicker(ticker);
    },
    setCurrencySecond(ticker) {
      this.secondCurrency = this.getCurrencyByTicker(ticker);
    },
    getCurrencyByTicker(ticker) {
      return this.allCurrencies.find((currency) => currency.ticker === ticker);
    },
    swapCurrencies() {
      const firstCurrency = this.firstCurrency;
      this.firstCurrency = this.secondCurrency;
      this.secondCurrency = firstCurrency;
    },
    handleCurrencyChange() {
      const firstCurrency = this.firstCurrency?.ticker;
      const secondCurrency = this.secondCurrency?.ticker;

      if (!firstCurrency || !secondCurrency) {
        return null;
      }

      this.getMinimalExchangeAmount(firstCurrency, secondCurrency);
    },
    getMinimalExchangeAmount(firstCurrency, secondCurrency) {
      fetch(
        `https://api.changenow.io/v1/min-amount/${firstCurrency}_${secondCurrency}?api_key=${apiKey}`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.minimalExchangeAmount = data.minAmount;
          this.exchangeAmount = data.minAmount;
          this.getEstimatedExchangeAmount(data.minAmount);
        });
    },
    handleExchangeAmountChange(exchangeAmount) {
      this.exchangeAmount = Number(exchangeAmount);

      if (exchangeAmount < this.minimalExchangeAmount) {
        this.estimatedExchangeAmount = null;
      } else {
        this.getEstimatedExchangeAmount(exchangeAmount);
      }
    },
    getEstimatedExchangeAmount(exchangeAmount) {
      const firstCurrency = this.firstCurrency?.ticker;
      const secondCurrency = this.secondCurrency?.ticker;

      fetch(
        `https://api.changenow.io/v1/exchange-amount/${exchangeAmount}/${firstCurrency}_${secondCurrency}?api_key=${apiKey}`
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.estimatedExchangeAmount = data.estimatedAmount;
        });
    },
    getAllCurrencies() {
      fetch("https://api.changenow.io/v1/currencies?active=true")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.allCurrencies = data;
        });
    },
  },
  created() {
    this.getAllCurrencies();
  },
};
</script>
