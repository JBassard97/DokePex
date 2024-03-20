<script setup lang="ts">
const handleAPress = () => console.log("Pressed A")
</script>

<template>
    <div class="aButton" @click="handleAPress">A</div>
</template>

<style>
.aButton {
    border-radius: 50%;
    background-color: darkslategrey;
    width: 50px;
    height: 50px;
    margin-bottom: 130px;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(28, 46, 46, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    font-family: sans-serif;
    color: rgba(28, 46, 46, 0.5);
    z-index: 3;
}

@media (max-width: 469px) {
    .aButton {
        scale: 0.7;
    }
}
</style>