<template>
  <div class="home">
    <h1>This is home page</h1>
    <h2>Counter is :: {{ counter }}</h2>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script setup>
import counterFunction from "@/mixins/counter-mixins.js";
const { counter, increment, decrement } = counterFunction();
</script>

<style scoped>
.home {
  text-align: center;
}
</style>
