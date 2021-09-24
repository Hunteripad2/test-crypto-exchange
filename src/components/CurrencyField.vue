<template>
  <div class="flex w-full bg-gray-100 h-12 rounded border divide-x">
    <input type="text" class="w-3/4 bg-transparent" />
    <Currency />
  </div>
</template>

<script>
import Currency from "./Currency.vue";

export default {
  name: "CurrencyField",
  components: {
    Currency,
  },
};
</script>
