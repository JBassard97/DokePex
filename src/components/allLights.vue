<script setup lang="ts">
</script>

<template>
    <div class="allLights">
        <div class="bigBlueLight"></div>
        <div class="threeLights">
            <div class="redLight"></div>
            <div class="yellowLight"></div>
            <div class="greenLight"></div>
        </div>
    </div>
</template>

<style>
.allLights {
    max-width: 200px;
    height: 60px;
    display: flex;
    margin-left: 10px;
    margin-top: 10px;
}

.bigBlueLight {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 4px solid white;
    background: #12b6ca;
    align-self: center;
    margin-right: -4px;
}

.threeLights {
    width: 100px;
    height: 25px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.redLight,
.yellowLight,
.greenLight {
    border-radius: 50%;
    border: 2px solid black;
    width: 15px;
    height: 15px;
}

.redLight {
    background: #c31e37;
}

.yellowLight {
    background: #b3be16;
}

.greenLight {
    background: #518454;
}
</style>