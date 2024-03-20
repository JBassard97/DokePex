<script setup lang="ts">
import twoRedLights from './twoRedLights.vue';
import bigRedLightAndSpeaker from './bigRedLightAndSpeaker.vue';
</script>

<template>
    <div class="middle">
        <div class="screenChassis">
            <div class="cutout"></div>
            <twoRedLights></twoRedLights>
            <div class="screen"></div>
            <bigRedLightAndSpeaker></bigRedLightAndSpeaker>
        </div>
    </div>
</template>

<style>
.middle {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70%;
}

.screenChassis {
    background: #cacaca;
    border-radius: 20px;
    border: 2px solid rgba(3, 5, 5, 0.5);
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 90%;
    justify-content: center;
    align-items: center;
    position: relative;
}

.cutout {
    position: absolute;
    bottom: -4px;
    left: -4px;
    width: 70px;
    height: 70px;
    background: #d30940;
    clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
    transform: rotate(270deg);
}

.screen {
    background: #282828;
    border-radius: 15px;
    width: 90%;
    height: 75%;
}
</style>
