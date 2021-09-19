<template>
  <div>
    <h1>Job detials page</h1>
    <!-- <p>The job id is {{ $route.params.id }}</p> -->
    <p>The job id is {{ id }}</p>
  </div>
</template>

<script>
export default {
  props: ['id'],
  // data() {
  //   return {
  //     id: this.$route.params.id,
  //   };
  // },
};
</script>

<style scoped>
</style>
