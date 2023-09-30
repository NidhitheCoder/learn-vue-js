import { onMounted, onUnmounted, ref } from 'vue'

export const useMouse = () => {
  const x = ref(0)
  const y = ref(0)

  const onUpdate = (event: MouseEvent) => {
    x.value = event.pageX
    y.value = event.pageY
  }

  onMounted(() => window.addEventListener('mousemove', onUpdate))
  onUnmounted(() => window.removeEventListener('mousemove', onUpdate))

  return { x, y }
}
