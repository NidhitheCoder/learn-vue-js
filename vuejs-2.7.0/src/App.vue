<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';

const input = ref<HTMLInputElement>();
const increment = ref(4);
const diff = ref();

const count = 0
const colors = reactive({
  count
});
const item = {
  name: "hello"
}
const whole = reactive([
  item, {
    name: "hello2"
  }, {
    name: "hello3"
  }, {
    name: "hello4"
  }
])

const state = reactive({ sample: 12 });

// const { sample } = state;



onMounted(() => {
  input?.value?.focus();
})

const changes = (e: any) => {
  increment.value = e.target.value;
  console.log(whole.findIndex(element => (
    element === item
  )))

  diff.value = whole.findIndex(element => (
    element === reactive(item)
  ))
  // sample++ // this is not possible because of the destructured state will leads to connection lost
}

</script>

<template>
  <p>helloo</p>
  <input ref="input" @input="changes" />
  <p>{{ increment }}</p>
  <button @click="colors.count++">Click me</button>
  <p>{{ colors.count }}</p>
  <p>{{ whole }}</p>
  <p>{{ item }}</p>
  <p>{{ diff }}</p>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
