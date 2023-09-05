<script setup lang="ts">
import { ref } from 'vue';

const message = ref('Sample message');
const htmlContent = "<i><p>Sample content</p><i>";
const showContent = ref(false);

const items = ref(["Sam", "Sara", "Jay", "Rohan"]);

const user = ref({
    name: 'Ken',
    age: 26,
    place: 'Japan',
    year: 1999
})

const doThis = () => {
    console.log("hello")
}

const event = ref('click')

const image = ref('https://picsum.photos/200/300')

const responseValue = ref("")

</script>

<template>
    <h1>V-models</h1>
    <!-- V-Text example -->
    <span>{{ message }}</span>
    <span v-text="message" />
    <!-- V-Html example -->
    <div v-html="htmlContent" />

    <!-- V-Show example -->
    <p v-show="showContent">When show content is true.</p>
    <p v-show="!showContent">When show content is false.</p>
    <!-- V-If, V-Else and V-Elseif examples -->
    <p v-if="showContent"> If section is shown</p>
    <p v-else-if="message"> Else if section is shown</p>
    <p v-else>Else part shown</p>

    <br />
    <!-- V-For examples -->
    <div :key="item" v-for="item in items">
        {{ item }}
    </div>
    <br />
    <div :key="key" v-for="(value, key) in user">
        <p>{{ key }} : {{ value }}</p>
    </div>
    <br />

    <!-- V-On examples -->
    <!-- <button v-on:click="doThis">Click me</button>
    <button @click="doThis">short hand</button>
    <button v-on:[event]="doThis">Dynamic event</button> -->
    <br />
    <!-- V-Bind examples-->
    <!-- <image :style="{ height: '200px', width: '200px' }" v-bind:src="image" />
    <image :style="{ height: '200px', width: '200px' }" :src="image" />
    <div :style="{ fontSize: '23px' }">hello</div> -->

    <!-- v-Model input binding -->
    <input type="text" v-text="responseValue" @input="(event: any) => responseValue = event?.target?.value">
    <!-- normal case -->
    <input v-model="responseValue" /> <!-- using vmodel -->
    <p>{{ responseValue }}</p>

</template>

<style scoped></style>