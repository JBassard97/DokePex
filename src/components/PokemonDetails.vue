<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{ pokemonId: number; }>();
const { pokemonId } = props;
console.log('Pokemon Id:', pokemonId);
</script>

<template>
    <h1>Single Pokemon's details</h1>
</template>

<style></style>