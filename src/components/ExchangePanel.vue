<template>
  <div class="mt-16 flex justify-between">
    <CurrencyField />
    <SwapButton />
    <CurrencyField />
  </div>
</template>

<script>
import CurrencyField from "./CurrencyField.vue";
import SwapButton from "./SwapButton.vue";

export default {
  name: "ExchangePanel",
  components: {
    CurrencyField,
    SwapButton,
  },
};
</script>
