<script setup lang="js">
import { ref } from 'vue';
const modes = ['off', 'VAC', 'VDC','mVDC', 'Ohm']; // will need to add more modes later
const currentModeIndex = ref(0);


function ChangeMode(){
    currentModeIndex.value = (currentModeIndex.value + 1) % modes.length ;
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