<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getRegionDex } from '@/utils/fetchDex';
import "./Dex.css";

const data: any = ref([]);

onMounted(async () => {
    try {
        const fetchedData = await getRegionDex(7);
        console.log(fetchedData);
        data.value = fetchedData;
    } catch (error) {
        console.error("Error fetching Kanto Dex data:", error);
    }
});
</script>

<template>
    <div class="Dex">
        <h3 class="genHeader">Alola Dex</h3>
        <div v-for="(pokemon, index) of data" :key="index" class="pokemonDiv">
            <img :src="pokemon.sprite" :alt="pokemon.name" class="pokemonSprite" />
            <p class="pokemonDetails">{{ pokemon.id }} - {{ pokemon.name }} </p>
        </div>
    </div>
</template>

<style></style>
