<template>
  <div class="px-main pt-60">
    <Title />
    <ExchangePanel />
    <div class="mt-8 flex items-end justify-end">
      <Address />
      <ExchangeButton />
    </div>
  </div>
</template>

<script>
import Title from "./components/Title.vue";
import ExchangePanel from "./components/ExchangePanel.vue";
import Address from "./components/Address.vue";
import ExchangeButton from "./components/ExchangeButton.vue";

export default {
  name: "App",
  components: {
    Title,
    ExchangePanel,
    Address,
    ExchangeButton,
  },
};
</script>

<style>
#app {
  font-family: "Vollkorn";
  color: black;
}
</style>
