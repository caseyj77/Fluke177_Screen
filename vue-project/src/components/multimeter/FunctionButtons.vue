<script setup lang="js">

</script>

<template>
    <div class="button-container">
    <button id="blue-button">HOLD</button>
    <button>MINMAX</button>
    <button>RANGE</button>
    <button id="yellow-button">Yellow</button>
    </div>
</template>

<style scoped>
.button-container {
    display:flex;
    justify-content: left;
    padding: 10px;
    gap: 10px
}
button {
    margin-top: 5px;
    color: white;
    background-color: black;
    width:60px;
    color: white;
    padding: 4px;
    border: none;

}

#blue-button {
    background-color: #1100ff;
}

#yellow-button {
    background-color: #ffa700;
}
</style>