<template>
  <div class="component">
    <h1>This is component</h1>
    <h2>Your name is :: {{ username_ }}</h2>
    <h2>Your Age is :: {{ userAge_ }}</h2>
    <button @click="sayHello_()">Say Hello Method</button>

    <h2>Friends List</h2>
    <div v-for="(friend, index) in injectedFriends" :key="index">
      <p>- {{ friend }}</p>
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";
// inject("provider name") from child components
const username_ = inject("userName");
const userAge_ = inject("userAge");
const sayHello_ = inject("helloMethod");
const injectedFriends = inject("friendList");
</script>
