<template>
  <div class="home">
    <h1>This is home page</h1>
    <!-- <MyComponent @handleClick="executeFunction" /> -->
    <MyComponent @handle-click="executeFunction" />
  </div>
</template>

<script setup>
import MyComponent from "@/components/MyComponent.vue";

const executeFunction = () => {
  console.log("Emit Executed");
};
</script>
