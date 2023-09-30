import { ref } from 'vue'

export const useFetch = (url: string): any => {
  const data = ref(null)
  const error = ref(null)
  const isLoading = ref(true)

  fetch(url)
    .then((res) => res.json())
    .then((json) => {
      data.value = json
      isLoading.value = false
    })
    .catch((err) => {
      error.value = err
      isLoading.value = false
    })

  return { data, isLoading, error }
}
