<script setup lang="ts">
import { ref } from 'vue';

import A_Button_Press from "@/assets/A_Button_Press.mp3";
const audioPlayer: any = ref(null);
const audioSrc = A_Button_Press;

const handleAPress = () => { console.log("Pressed A"); audioPlayer.value.play(); };
</script>

<template>
    <div class="aButton" @click="handleAPress">A</div>
    <audio ref="audioPlayer" :src="audioSrc"></audio>
</template>

<style>
.aButton {
    border-radius: 50%;
    background-color: #313131;
    width: 50px;
    height: 50px;
    margin-bottom: 110px;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid rgba(3, 5, 5, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    font-family: sans-serif;
    color: rgba(3, 5, 5, 0.5);
    z-index: 3;
}

@media (max-width: 469px) {
    .aButton {
        scale: 0.7;
    }
}
</style>
