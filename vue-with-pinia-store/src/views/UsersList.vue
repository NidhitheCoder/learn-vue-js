<template>
  <div class="list-container">
    <div class="list-item-wrapper">
      <div class="user-table-header">
        <h1>Users List</h1>
        <p>Total users: {{ users.length }}</p>
      </div>
      <div v-if="!users.length">No Users found</div>
      <div
        v-for="user in users"
        :key="user.id"
        :style="{ backgroundColor: user.colorCode }"
        class="user-item"
      >
        <p>{{ user.id }}</p>
        <p>{{ user.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useUserStore } from '../stores/user'

const { usersList } = useUserStore()
const users = computed(() => usersList.value)
</script>

<style scoped>
.list-container {
  width: 60%;
  height: 100%;
  margin: auto;
  margin-top: 2rem;
  gap: 1rem;
}

.list-item-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  background: darkslategray;
  padding: 2rem;
  border-radius: 5px;
}

.user-table-header {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid cornflowerblue;
}

.user-item {
  border-radius: 5px;
  padding: 0.3rem;
  display: flex;
  flex-direction: row;
  justify-content: left;
  gap: 1rem;
  background-color: gray;
}

.user-item p {
  font-size: 18px;
  font-weight: 600;
}
</style>
