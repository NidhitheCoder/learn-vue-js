<template>
  <div class="user-form">
    <h1>Add User</h1>
    <label for="id">ID</label>
    <input name="id" type="text" v-model="user.id" disabled />
    <label for="name">Name</label>
    <input name="name" type="text" v-model="user.name" />
    <label for="color-code">Color Code</label>
    <input name="color-code" type="text" v-model="user.colorCode" />
    <p class="error-text">{{ errorMessage }}</p>
    <button @click="onAddUserSubmit" class="add-user-button">Add User</button>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useUserStore } from '../stores/user'
import type { User } from '../types'

const { usersList, addUser } = useUserStore()
const errorMessage = ref('')

const initialUser = computed(() => ({
  name: '',
  id: usersList.value.length + 1,
  colorCode: ''
}))

const user = ref<User>(initialUser.value)

const onAddUserSubmit = () => {
  const invalidArrayIndex = -1

  const isValidInput = Object.values(user.value).findIndex((value) => !value)
  if (isValidInput === invalidArrayIndex) {
    addUser(user.value)
    user.value = initialUser.value
    errorMessage.value = ''
  } else {
    errorMessage.value = 'Please fill all the fields'
  }
}
</script>

<style scoped>
.user-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 70vh;
  margin: 2rem auto;
  border: 1px solid gray;
  padding: 4rem;
  min-width: 500px;
  border-radius: 5px;
}

.user-form label {
  width: 100%;
  text-align: left;
  font-size: 18px;
}

.user-form input {
  width: 100%;
  height: 3rem;
  border-radius: 5px;
  border: none;
  margin-bottom: 1.5rem;
  outline: none;
  font-size: 16px;
  padding-left: 0.4rem;
  background: lightgray;
}

.user-form input:disabled {
  background: rgb(151, 150, 147);
  color: rgb(119, 114, 114);
  font-weight: bold;
}

.add-user-button {
  margin-top: 2rem;
  padding: 0.5rem 2rem;
  border-radius: 5px;
  border: 1px solid green;
  background-color: rgb(93, 151, 93);
  color: white;
  font-weight: bold;
}

.error-text {
  height: 5rem;
  color: red;
  animation: forwards;
}
</style>
