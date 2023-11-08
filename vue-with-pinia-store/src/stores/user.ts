import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { User } from '@/types'

export const useUserStore = defineStore('users', () => {
  const users = ref<User[]>([])

  const usersList = computed(() => users)

  const addUser = (user: User) => {
    users.value = [...users.value, user]
  }

  const updateUser = (updatedValue: User) => {
    users.value = users.value?.map((user) => (user.id === updatedValue.id ? updatedValue : user))
  }

  return { usersList, addUser, updateUser }
})
