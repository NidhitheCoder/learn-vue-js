<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ greeting() }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Your first vue file ",
    };
  },
  methods: {
    greeting: function () {
      return "Heyy here is your greeting";
    },
  },
};
</script>

<style>
</style>
