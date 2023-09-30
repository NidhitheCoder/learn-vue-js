import { ref } from 'vue'

type Method = 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export const useUpdate = () => {
  const data = ref(null)
  const isLoading = ref(false)
  const error = ref(null)

  const onMutate = (
    baseURL: string,
    method: Method,
    uniqueID?: string,
    params?: any,
    payload?: any
  ) => {
    isLoading.value = true
    let paramsIntoString = params ? '/?' : ''
    Object.keys(params).map((paramKey) => (paramsIntoString += `${paramKey}=${params[paramKey]}`))

    const updatedURL = `${baseURL}/${uniqueID}${paramsIntoString}`

    fetch(updatedURL, {
      method,
      body: payload ? JSON.stringify(payload) : null
    })
      .then((res) => res.json())
      .then((res) => {
        data.value = res
        isLoading.value = false
      })
      .catch((err) => {
        error.value = err
        isLoading.value = false
      })
  }

  return { data, error, isLoading, onMutate }
}
