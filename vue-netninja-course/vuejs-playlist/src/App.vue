<template>
  <div>
  <app-header v-bind:title="title"></app-header>
  <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
  <!-- <hr>
  <app-ninjas v-bind:ninjas="ninjas"></app-ninjas> -->
  <app-footer v-bind:title="title"></app-footer>
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
    'app-ninjas': Ninjas,
  },
  data() {
    return {
      ninjas: [
        {name: 'Ryu', speciality: 'Vue components', show: false},
        {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
        {name: 'Hitoshi', speciality: 'Click events', show: false},
        {name: 'Tango', speciality: 'Conditionals', show: false},
        {name: 'Shoy', speciality: 'Click events', show: false},
        {name: 'Kim', speciality: 'Conditionals', show: false},
      ],
      title: 'Vue ninjas',
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
