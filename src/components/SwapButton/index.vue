<template>
  <button
    class="sm:mx-8 sm:my-0 my-5 sm:transform sm:rotate-90 w-5 hover:opacity-75"
    @click="this.$emit('swapCurrencies')"
  >
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 12.01V0L14 0V12.01H17L13 16L9 12.01H12Z" fill="#11B3FE" />
      <path d="M3 3.99L3 16H5L5 3.99H8L4 0L0 3.99H3Z" fill="#11B3FE" />
    </svg>
  </button>
</template>

<script>
export default {
  name: "SwapButton",
};
</script>
