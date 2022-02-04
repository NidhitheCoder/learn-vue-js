<template>
  <div class="class">
    <p>Hello</p>
    <p>{{someData}}</p>
  </div>
</template>

<script>

import MyMixin from '../mixins/index'
export default {
  name: 'MixinsExample',
  mixins: [MyMixin],
  props: {
    text: String,
  }
}
</script>

<style scoped>

</style>
