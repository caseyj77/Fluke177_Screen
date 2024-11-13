<script setup lang="js">
import { ref } from 'vue'
import DigitalScreen from '@/components/DigitalScreen.vue'
import SelectorButton from '@/components/SelectorButton.vue'

const currentMode = ref('off')

function handleModeChange(newMode) {
  currentMode.value = newMode
}
</script>

<template>
  <div>
    <DigitalScreen :mode="currentMode" />
  </div>
  <div>
    <SelectorButton @modeChanged="handleModeChange" />
  </div>
</template>
