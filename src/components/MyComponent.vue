<template>
  <div class="component">
    <h1>This is component</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("Router from component", this.$router);
    console.log("Route from component", this.$route);
  },
};
</script>
