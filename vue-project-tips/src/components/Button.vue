<template>
  <div>
    <button>{{btnText}}</button>
    <p>{{bgColor}}</p>
  </div>
</template>

<script>
export default {
  props: ['btnText', 'bgColor']
};
</script>

<style scoped>
button {
  background: aquamarine;
  font-size: 60px;
  border-radius: 20px;
  padding: 10px;
  color: black;
}
</style>
