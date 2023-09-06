<template>
    <div>Hello</div>
    <MyComponentSample v-model:title="inputVal" />
    <p>{{ inputVal }}</p>
    <br>
    <UserName v-model:firstName="firstName" v-model:lastName="lastName" />
    <span>First Name : {{ firstName }}</span>
    <span>Last Name: {{ lastName }}</span>
    <br>
    <br>
    <VModelModifiers v-model:title.capitalize="title" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

import MyComponentSample from './MyComponentSample.vue';
import UserName from './UserName.vue';
import VModelModifiers from './VModelModifiers.vue';

const inputVal = ref("");
const firstName = ref("");
const lastName = ref("");
const title = ref("")
</script>

<style scoped></style>