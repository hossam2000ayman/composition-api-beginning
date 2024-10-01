<template>
  <div class="home">
    <h1>This is home page</h1>
    <TheComponenet />
  </div>
</template>
<script setup>
import TheComponenet from "@/components/MyComponent.vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
console.log("Router from view ", router);
const route = useRoute();
console.log("Route from view ", route);
console.log("Route from view ", route.name);
</script>
