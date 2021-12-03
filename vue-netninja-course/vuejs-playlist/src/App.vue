<template>
  <div>
    <h1>{{ title }}</h1>
    <!-- <ninjas></ninjas>  Using global registered component-->
    <ninjas></ninjas>
  </div>
</template>

<script>
import Ninjas from './Ninjas.vue';
// Locally regeisted component
export default {
  components: { Ninjas }, // Add Component
  data() {
    return {
      title: "Ninja App",
    };
  },
};
</script>

<style>
</style>
