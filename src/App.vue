<template>
  <div id="app">
    <MyNavBar />
    <router-view />
  </div>
</template>

<script setup>
import MyNavBar from "@/components/NavBar.vue";
</script>

<style>
#app {
  text-align: center;
}
</style>
