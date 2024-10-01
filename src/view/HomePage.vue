<template>
  <div class="home">
    <h1 v-colorize="'blue'" v-maxSize="40">This is home page</h1>
    <p v-colorize="'green'" v-maxSize="30" v-boldFont="'bold'">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
      repellendus iste natus ea est hic voluptatem veniam accusamus quis,
      assumenda a rerum dignissimos. Minima sequi numquam aliquid, incidunt
      ipsum molestiae!
    </p>
  </div>
</template>

<script setup>
// custom directive through composition API (locally)
const vColorize = {
  mounted: (element, data) => {
    element.style.color = data.value;
  },
};
</script>
