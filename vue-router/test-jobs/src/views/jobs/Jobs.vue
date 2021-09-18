<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id">
    <h1>{{ job.title }}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      jobs: [
        { title: "Job 1", id: 1, details: "Lorem1" },
        { title: "Job 2", id: 2, details: "Lorem2" },
        { title: "Job 3", id: 3, details: "Lorem3" },
      ],
    };
  },
};
</script>

<style></style>
