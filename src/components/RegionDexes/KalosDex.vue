<script setup lang="ts">
import { ref, onMounted, defineEmits } from 'vue';
import { getRegionDex } from '@/utils/fetchDex';
import "./Dex.css";

const data: any = ref([]);

onMounted(async () => {
    try {
        const fetchedData = await getRegionDex(6);
        console.log(fetchedData);
        data.value = fetchedData;
    } catch (error) {
        console.error("Error fetching Kanto Dex data:", error);
    }
});

const emit = defineEmits(['goBack','viewPokemon']);

const handleGoBack = () => {
    emit('goBack');
}

const handleViewPokemon = (pokemonId: number) => {
    emit('viewPokemon', pokemonId)
}
</script>

<template>
    <div class="backArrow">
        <img src="@/assets/backArrow.svg" alt="Back Arrow" @click="handleGoBack">
    </div>
    <div class="Dex">
        <h3 class="genHeader">Kalos Dex</h3>
        <div v-for="(pokemon, index) of data" :key="index" class="pokemonDiv" @click="handleViewPokemon(pokemon.id)">
            <img :src="pokemon.sprite" :alt="pokemon.name" class="pokemonSprite" />
            <p class="pokemonDetails">{{ pokemon.id }} - {{ pokemon.name }} </p>
        </div>
    </div>
</template>

<style></style>
