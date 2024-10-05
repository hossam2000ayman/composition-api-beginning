<template>
  <div class="home">
    <h1>This is home page</h1>
    <h2>Counter is :: {{ counter }}</h2>
    <button @click="counter++">Increment</button>
    <button @click="counter--">Decrement</button>
  </div>
</template>
<script setup>
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from "vue";

//Composition API is work faster than the Options API
//because it access on the function itself and not access on the instance itself like on options API ("this")

const counter = ref(0);

onBeforeMount(() => {
  console.log("Composition API Before Mount");
});
onMounted(() => {
  console.log("Composition API Mounted");
});
onBeforeUpdate(() => {
  console.log("Composition API Before Update");
});
onUpdated(() => {
  console.log("Composition API Updated");
});
</script>
<style scoped>
.home {
  text-align: center;
  padding: 20px;
}
</style>
