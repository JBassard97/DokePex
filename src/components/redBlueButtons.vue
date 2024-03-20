<script setup lang="ts">
const handleButtonPress = (color: string) => {
    console.log(`Pressed ${color} button`)
}
</script>

<template>
    <div class="redBlueButtons">
        <div class="redButton" @click="handleButtonPress('red')"></div>
        <div class="blueButton" @click="handleButtonPress('blue')"></div>
    </div>
</template>

<style>
.redBlueButtons {
    width: 100%;
    position: absolute;
    bottom: 130px;
    display: flex;
    justify-content: center;
}

.redButton,
.blueButton {
    width: 60px;
    height: 8px;
    border-radius: 20px;
    border: 3px solid rgba(28, 46, 46, 0.5);
    margin: 5px 15px;
    cursor: pointer;
}

.redButton {
    background: #ce0221;
}

.blueButton {
    background: #0b7084;
}
</style>