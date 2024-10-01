<template>
  <div class="home">
    <h1>This is home page</h1>
    <!-- <h2>My name is {{ firstName }} {{ lastName }}</h2> -->
    <h2>age is {{ age }}</h2>
    <!-- <h2>isActive :: {{ isActive }}</h2> -->

    <!-- <h1> -->
    <!-- There is a user called {{ userObject.name }} his age is -->
    <!-- {{ userObject.age }} -->
    <!-- </h1> -->
    <!-- <h1 v-for="(x, key) in myArr" :key="key">number {{ x }}</h1> -->
    <!-- <button @click="increaseAge">Increase Age</button> -->

    <!-- <br /> -->
    <!-- <br /> -->
    <!-- <br /> -->
    <!-- <h3>Computed Message is ::</h3> -->
    <!-- <h3 ref="welcomeUserRef">{{ welcomeUser }}</h3> -->

    <!-- <br /> -->
    <!-- <br /> -->
    <!-- <br /> -->
    <!-- <h1>Computed Age is ::</h1> -->
    <!-- <h1>{{ afterYears }}</h1> -->

    <MyComponent :userName="name" :userAge="age" />
  </div>
</template>

<!-- this is combination between option apis and composition api -->
<!-- <script>
export default {
  //options api
  data() {
    return {
      name: "Hossam",
    };
  },

  methods: {},

  computed: {},

  watch: {},

  // one of option api can access on composition api like "setup"
  setup() {
    const lastName = "AlBadry";

    return { lastName };
  },
};
</script> -->

<!-- what will be the case of using only composition api using "setup" in script tag -->

<script setup>
import { ref } from "vue";
import MyComponent from "@/components/MyComponent.vue";
//ref can be used within any datatypes (reference datatypes) (primitive datatypes)
//reactive can be used only on reference data types which are object and array

// normal fixed variables declared in javascript
// const firstName = "Hossam";
// const lastName = "ElBadry";

//how to declare reactive data --->>>> through function called "ref", "reactive"
// const firstName = ref("Hossam");
// const lastName = ref("ElBadry");

// const isActive = ref(true);

// const userObject = ref({
//   name: "Samy Mohamed",
//   age: 25,
// });

// const myArr = ref([1, 2, 3]);

//lesson 2
// function increaseAge() {
//   //age = ref(24) so age is object of ref
//   age.value++;
// }

//lesson 3
const name = ref("Hossam ElBadry");
const age = ref(24);

// const welcomeUser = computed(() => {
//   return `Hello ${name.value}, Your age is ${age.value}`;
// });

// const afterYears = computed(() => {
//   return (
//     `Hey, ${name.value} your age will be ${age.value + 5} after ` +
//     `5 years old`
//   );
// });

//lesson 4
//before mounted declare this variable
// const welcomeUserRef = ref(null);

// setTimeout(() => {
//   console.log(welcomeUserRef.value);
// }, 2000);

//lesson 5
</script>
