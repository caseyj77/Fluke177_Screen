<script setup lang="js">
import { defineProps } from 'vue'

const props = defineProps({
  mode: String,
})
</script>

<template>
  <div id="fluke-177">
    <div id="digital-screen" class="container">
      <div class="block">
        <img src="../assets/AUTO with Line.png" width="40px" height="20px" />
        <img src="../assets/HOLD.png" width="40px" height="20px" />
      </div>
      <div class="block">
        <img src="../assets/MIN.png" width="40px" height="20px" />
        <img src="../assets/MAX.png" width="40px" height="20px" />
        <img src="../assets/MAX-white-bg.png" width="40px" height="20px" />
        <img src="../assets/MIN-white-bg.png" width="40px" height="20px" />
        <img src="../assets/AVG-white-bg.png" width="40px" height="20px" />
      </div>
      <div class="block">
        <img
          src="data:image/svg+xml;utf8,<svg width='15px' height='15px' xmlns='http://www.w3.org/2000/svg'><text x='0' y='12' font-size='12' fill='black'>nµ</text></svg>"
          alt="n µ icon"
        />
        <img
          src="data:image/svg+xml;utf8,<svg width='15px' height='15px' xmlns='http://www.w3.org/2000/svg'><text x='0' y='12' font-size='12' fill='black'>°F</text></svg>"
          alt="F icon"
        />
        <img
          src="data:image/svg+xml;utf8,<svg width='15px' height='15px' xmlns='http://www.w3.org/2000/svg'><text x='0' y='12' font-size='12' fill='black'>°C</text></svg>"
          alt="C icon"
        />
      </div>

      <div class="block" id="left-center">
        <img src="../assets/high-voltage-svgrepo-com.svg" width="15px" height="15px" />
        <img src="../assets/negative-sign-svgrepo-com.svg" width="15px" height="15px" />
        <img src="../assets/diode-svgrepo-com.svg" width="15px" height="15px" />
        <img
          src="../assets/wifi-signal-svgrepo-com.svg"
          width="15px"
          height="15px"
          style="transform: rotate(90deg)"
        />
      </div>
      <div class="block large">5</div>
      <div class="block" id="right-center">
        <div id="row-one">
          <img
            src="data:image/svg+xml;utf8,<svg width='10px' height='15px' xmlns='http://www.w3.org/2000/svg'><text x='0' y='12' font-size='12' fill='black'>m</text></svg>"
            alt="Mega icon"
          />
          <img
            v-show="mode === 'VAC' || mode === 'VDC'"
            src="data:image/svg+xml;utf8,<svg width='10px' height='15px' xmlns='http://www.w3.org/2000/svg'><text x='0' y='12' font-size='12' fill='black'>V</text></svg>"
            alt="Volt icon"
          />
          <img
            src="data:image/svg+xml;utf8,<svg width='10px' height='15px' xmlns='http://www.w3.org/2000/svg'><text x='0' y='12' font-size='12' fill='black'>A</text></svg>"
            alt="Ampeer icon"
          />
        </div>
        <div id="row-two">
          <img
            v-show="mode === 'VDC'"
            src="data:image/svg+xml;utf8,<svg width='15px' height='15px' xmlns='http://www.w3.org/2000/svg'><text x='0' y='12' font-size='12' fill='black'>DC</text></svg>"
            alt="DCicon"
          />
          <img
            v-show="mode === 'VAC'"
            src="data:image/svg+xml;utf8,<svg width='15px' height='15px' xmlns='http://www.w3.org/2000/svg'><text x='0' y='12' font-size='12' fill='black'>AC</text></svg>"
            alt="AC icon"
          />
        </div>
        <div id="row-three">
          <img
            src="data:image/svg+xml;utf8,<svg width='10px' height='15px' xmlns='http://www.w3.org/2000/svg'><text x='0' y='12' font-size='12' fill='black'>M</text></svg>"
            alt="Mega icon"
          />
          <img
            src="data:image/svg+xml;utf8,<svg width='10px' height='15px' xmlns='http://www.w3.org/2000/svg'><text x='0' y='12' font-size='12' fill='black'>k</text></svg>"
            alt="Kilo Ohm icon"
          />
          <img
            src="data:image/svg+xml;utf8,<svg width='15px' height='15px' xmlns='http://www.w3.org/2000/svg'><text x='0' y='12' font-size='12' fill='black'>Ω</text></svg>"
            alt="Ohm icon"
          />
        </div>
        <div id="row-four">
          <img
            src="data:image/svg+xml;utf8,<svg width='10px' height='15px' xmlns='http://www.w3.org/2000/svg'><text x='0' y='12' font-size='12' fill='black'>k</text></svg>"
            alt="kilo icon"
          />
          <img
            src="data:image/svg+xml;utf8,<svg width='15px' height='15px' xmlns='http://www.w3.org/2000/svg'><text x='0' y='12' font-size='12' fill='black'>Hz</text></svg>"
            alt="Hertz icon"
          />
        </div>
      </div>

      <div class="block">7</div>
      <div class="block">8</div>
      <div class="block">9</div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap');

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
  background-color: #cfcdcd;
  color: rgb(0, 26, 255);
  font-size: 1rem;
  border: 1px solid #000;
}

#left-center {
  display: grid;
  max-width: 25px;
}

.large {
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  font-size: 2rem;
}
#right-center {
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: left;
  min-width: 50px;
}
</style>
