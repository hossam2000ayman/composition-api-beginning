<template>
  <div class="home">
    <h1>This is home page</h1>
    <h2>Counter is :: {{ counter }}</h2>

    <button @click="counter++">Increase</button>
    <button @click="counter--">Decrease</button>

    <br />
    <br />
    <button @click="myArr.push(counter)">Push Counter value</button>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";

const counter = ref(0);

//Watch on Primitive datatype
watch(
  //Watch on which Data (fields)
  () => {
    return counter.value;
  },
  //Callback function to execute when the watched data changes
  //it recieves 2 optional arguments the new value and the old value
  (/* newValue, oldValue */) => {
    // console.log(`oldValue :: ${oldValue}`);
    // console.log(`newValue :: ${newValue}`);
    console.log("counter is :: ", counter.value);
  }
);

//Watch on reference datatype like array and object
//so how we can watch on reference datatype like a array or object ?
//by adding arguments of object which declare a deep is true instead of false
const myArr = ref([]);
watch(
  () => myArr.value,
  (newValue) => console.log(newValue),
  { deep: true } //deep dive on reference datatype like array or object
);
</script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}
</style>
