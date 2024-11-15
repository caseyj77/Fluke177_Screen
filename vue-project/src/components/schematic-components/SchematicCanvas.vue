<script setup>

</script>

<template>
    <div class="container">
        <div class="toolbar">
            <div>
                <img 
                src="../../assets/schematic/battery-large-showing-terminals-svgrepo-com.svg"
                height="50px"
                width="50px"
                >
            </div>
            <div>
                <img
                src="../../assets/schematic/resistor-svgrepo-com.svg"
                height="50px"
                width="50px"
                >
            </div>
        </div>
        <div>
            <canvas width="800px" height="600px">

            </canvas>
        </div>
    </div>
</template>

<style scoped>
canvas {
    background-color: aqua;
}

.toolbar {
    background-color: brown;
    display: flex;
    flex-direction: column;
    max-width: 60px;
    text-align: center;
    margin-right: 5px;
    height: 600px;

}

.container {
  margin: 0;
  padding: 0;
  display: flex;
}


</style>