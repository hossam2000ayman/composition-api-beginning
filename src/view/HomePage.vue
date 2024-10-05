<template>
  <div class="home">
    <h1>This is home page</h1>
    <hr />
    <MyComponent />
  </div>
</template>
<script setup>
import MyComponent from "@/components/MyComponent.vue";
import { provide, ref } from "vue";

const username = ref("Hossam AlBadry");
const age = ref(24);
const sayHello = () => {
  console.log("Hello" + " " + username.value);
};

const friends = ref([
  "moaz",
  "amr",
  "mahmoud",
  "abdullah",
  "mlegy",
  "lina",
  "amani",
  "hossam",
  "mostafa",
]);

// provide(provider name , provider value) from parent component
provide("userName", username.value);
provide("userAge", age.value);
provide("helloMethod", sayHello);
provide("friendList", friends.value);
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}
</style>
