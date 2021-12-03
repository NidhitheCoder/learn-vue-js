<template>
  <div>
  <app-header></app-header>
  <ninjas></ninjas>
  <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Ninjas from './components/Ninjas.vue'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'ninjas': Ninjas,
    Ninjas,
  },
  data() {
    return {

    };
  },
};
</script>

<style scoped>

</style>


  <!-- Oldest code in the tutorial
  
  <template>
  <div>
    <h1>{{ title }}</h1>
    <!-- <ninjas></ninjas>  Using global registered component
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

<style scoped>
  h1 {
    color: purple;
  }
</style>
-->
