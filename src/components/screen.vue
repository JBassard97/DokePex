<script setup lang="ts">
import twoRedLights from './twoRedLights.vue';
</script>

<template>
    <div class="middle">
        <div class="screenChassis">
            <div class="cutout"></div>
            <twoRedLights></twoRedLights>
            <div class="screen"></div>
            <div class="bigRedLightAndSpeaker">
                <div class="bigRedLight"></div>
                <div class="speaker">
                    <div class="hole"></div>
                    <div class="hole"></div>
                    <div class="hole"></div>
                    <div class="hole"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.bigRedLightAndSpeaker {
    width: 70%;
    height: 45px;
    position: absolute;
    bottom: 10px;
    display: flex;
    justify-content: space-between;

}

@media (max-width: 400px) {
    .bigRedLightAndSpeaker {
        bottom: 5px;
        height: 30px;
        margin-left: 40px;
    }
}

.bigRedLight {
    aspect-ratio: 1;
    height: 30px;
    border-radius: 50%;
    background: #b91446;
    border: 2px solid rgba(3, 5, 5, 0.5);
}

.speaker {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.hole {
    width: 90%;
    height: 5px;
    background: #282828;
    border-radius: 10px;
}

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
