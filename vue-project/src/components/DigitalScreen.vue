<script setup lang="js">
</script>

<template>
  <div id="fluke-177">
    <div id="digital-screen" class="container">
      <div class="block">1</div>
      <div class="block">2</div>
      <div class="block">3</div>
      <div class="block">4</div>
      <div class="block large">5</div>
      <div class="block">6</div>
      <div class="block">7</div>
      <div class="block">8</div>
      <div class="block">9</div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Digital-7&display=swap');

#digital-screen {
  display: grid;
  grid-template-rows: 1fr 3fr 1fr;
  grid-template-columns: 1fr 3fr 1fr;
  gap: 5px; /* Adjusts the space between blocks */
  width: 200px; /* Adjust as needed */
  height: 200px; /* Adjust as needed */
  font-family: 'Digital-7', sans-serif;
}

.block {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333;
  color: #0f0;
  font-size: 1rem;
  border: 1px solid #000;
}

.large {
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  font-size: 2rem;
}
</style>
