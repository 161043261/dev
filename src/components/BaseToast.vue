<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'

defineProps<{
  message: string
}>()

const isAlive = ref(false)
let timer: number | null = null

onBeforeUnmount(() => {
  if (timer) {
    clearTimeout(timer)
    timer = null
  }
})

const mount = () => {
  if (timer) {
    return
  }
  isAlive.value = true
  timer = setTimeout(() => {
    isAlive.value = false
    timer = null
  }, 1500)
}

defineExpose({ mount, isAlive })
</script>

<template>
  <Transition name="love">
    <div
      v-if="isAlive"
      class="class-container fixed top-[20%] left-[50%] z-100 -translate-x-[50%] rounded-lg border-[3px] border-(--color-theme) p-[5px]"
    >
      {{ message }}
    </div>
  </Transition>
</template>

<style lang="css" scoped>
.love-enter-active,
.love-leave-active {
  transition: opacity 1s ease;
}

.love-enter-from,
.love-leave-to {
  opacity: 0;
}
</style>
