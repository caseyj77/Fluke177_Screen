<script setup lang="js">
import { ref, defineEmits } from 'vue'
const modes = ['off', 'VAC', 'VDC', 'mVDC', 'Ohm'] // Mode for the mulitmeter
const currentModeIndex = ref(0) // initalized to index 0 or 'off'
const emit = defineEmits(['modeChanged'])

// changes the mode by incrementing the index value by one
function ChangeMode() {
  currentModeIndex.value = (currentModeIndex.value + 1) % modes.length
  emit('modeChanged', modes[currentModeIndex.value]) // this will emit the curent mode[currentModeIndex.value] off. VAC, VDC etc...
}
</script>

<template>
  <div>
    <button @click="ChangeMode">{{ modes[currentModeIndex] }}</button>
  </div>
</template>

<style scoped>
button {
  padding: 10px;
  margin-top: 10px;
  min-width: 50px;
}
</style>
