<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';

const input = ref<HTMLInputElement>();
// const { sample } = state;

onMounted(() => {
    input?.value?.focus();
})

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
    <h1>Refs and Reactive</h1>
    <input ref="input" @input="changes" />
    <p>{{ increment }}</p>
    <button @click="colors.count++">Click me</button>
    <p>{{ colors.count }}</p>
    <p>{{ whole }}</p>
    <p>{{ item }}</p>
    <p>{{ diff }}</p>
    <p>{{ state }}</p>
</template>

<style scoped></style>