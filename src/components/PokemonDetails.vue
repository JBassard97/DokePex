<script setup lang="ts">
import { defineProps, onMounted, ref, defineEmits } from 'vue';
import { fetchMonDetails } from '@/utils/fetchMonDetails';

const props = defineProps<{ pokemonId: number; }>();
const { pokemonId } = props;
const pokemonDetails: any = ref(null);
const emit = defineEmits(['goBack']);
const audioPlayer = ref<HTMLAudioElement | null>(null);
const soundUrl = ref<string>('');

onMounted(async () => {
    try {
        const details = await fetchMonDetails(pokemonId);
        const { cries } = details;
        console.log("cry:", cries.latest); //accurate
        pokemonDetails.value = details;

        soundUrl.value = cries.latest;
        playAudio();

    } catch (error) {
        console.error('Error fetching details:', error);
    }
})

function playAudio() {
    if (audioPlayer.value) {
        audioPlayer.value.play();
    }
}

function handleGoBack() {
    emit('goBack');
}
</script>

<template>
    <div class="backArrow">
        <img src="@/assets/backArrow.svg" alt="Back Arrow" @click="handleGoBack">
    </div>
    <div v-if="pokemonDetails">
        <p class="detailsHeader"> #{{ pokemonDetails.id }} - {{ pokemonDetails.name }}</p>
    </div>
    <audio ref="audioPlayer" :src="soundUrl" autoplay></audio>
</template>

<style>
.detailsHeader {
    font-weight: bold;
}
</style>