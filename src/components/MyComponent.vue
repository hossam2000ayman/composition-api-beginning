<template>
  <div class="component">
    <h1>This is component</h1>
    <button @click="emits('handleClick')">Emit event</button>
  </div>
</template>

<script setup>
import { defineEmits } from "vue";
const emits = defineEmits(["handleClick"]);
</script>
