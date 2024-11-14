<script setup lang="js">
import { ref } from 'vue'
import DigitalScreen from '@/components/multimeter/DigitalScreen.vue'
import SelectorButton from '@/components/multimeter/SelectorButton.vue'
import FunctionButtons from '@/components/multimeter/FunctionButtons.vue';

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
    <FunctionButtons />
  </div>
  <div>
    <SelectorButton @modeChanged="handleModeChange" />
  </div>
</template>


