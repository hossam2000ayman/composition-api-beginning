<template>
  <div class="nav-bar">
    <ul>
      <li v-for="(option, index) in router.options.routes" :key="index">
        <router-link :to="{ name: option.name }">
          {{ option.meta.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<style scoped lang="scss">
ul {
  display: flex;
  justify-content: center;
  gap: 30px;
  list-style: none;
  padding: 10px 0;
  background-color: rgb(109, 108, 93);
  a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    &.router-link-active {
      font-size: 20px;
      font-weight: bold;
      text-decoration: underline;
    }
  }
}
</style>
