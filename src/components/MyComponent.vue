<template>
  <div class="component">
    <h1>This is component</h1>
    <h1>Name is {{ props.userName }}</h1>
    <h1>Age is {{ props.userAge }}</h1>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  userName: { type: String, required: true },
  userAge: { type: Number, required: true },
});
</script>
