<script setup lang="ts">
import allLights from '@/components/allLights.vue';
import dividingLine from '@/components/dividingLine.vue';
import dPad from '@/components/dPad.vue';
import greenScreen from '@/components/greenScreen.vue';
import aButton from '@/components/aButton.vue';
import redBlueButtons from '@/components/redBlueButtons.vue';
</script>

<template>
    <div class="face">
        <allLights></allLights>
        <dividingLine></dividingLine>
        <div class="openFooter">
            <dPad></dPad>
            <greenScreen></greenScreen>
            <aButton></aButton>
        </div>
        <redBlueButtons></redBlueButtons>
    </div>
</template>

<style>
.openFooter {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    position: absolute;
    justify-content: space-evenly;
    align-items: center;
    bottom: -20px;
}
</style>
