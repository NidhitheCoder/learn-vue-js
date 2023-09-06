<template>
    <div>Hello</div>
    <MyComponentSample v-model:title="inputVal" />
    <p>{{ inputVal }}</p>
    <br>
    <UserName v-model:firstName="firstName" v-model:lastName="lastName" />
    <span>First Name : {{ firstName }}</span>
    <span>Last Name: {{ lastName }}</span>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import MyComponentSample from './MyComponentSample.vue';
import UserName from './UserName.vue';

const inputVal = ref("");
const firstName = ref("");
const lastName = ref("");
</script>

<style scoped></style>