<script setup lang="ts">
import twoRedLights from './twoRedLights.vue';
import bigRedLightAndSpeaker from './bigRedLightAndSpeaker.vue';
import mainScreen from './mainScreen.vue';
import triangleCutout from './triangleCutout.vue';
</script>

<template>
    <div class="middle">
        <div class="screenChassis">
            <triangleCutout></triangleCutout>
            <twoRedLights></twoRedLights>
            <mainScreen></mainScreen>
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
</style>
