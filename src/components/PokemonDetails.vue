<script setup lang="ts">
import { defineProps, onMounted, ref, defineEmits } from 'vue';
import { fetchMonDetails } from '@/utils/fetchMonDetails';

const props = defineProps<{ pokemonId: number; }>();
const { pokemonId } = props;
const pokemonDetails: any = ref(null);
const emit = defineEmits(['goBack']);

onMounted(async () => {
    try {
        const details = await fetchMonDetails(pokemonId);
        pokemonDetails.value = details;
    } catch (error) {
        console.error('Error fetching details:', error);
    }
})

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
</template>

<style>
.detailsHeader {
    font-weight: bold;
}
</style>