<script setup lang="ts">
import { genArray } from '@/utils/genArray';
import { defineEmits } from 'vue';

const emit = defineEmits(['selectGeneration']);
const props = { genArray };

const selectGen = (gen: any) => {
    emit('selectGeneration', gen.number);
}
</script>

<template>
    <div class="mainMenu">
        <h3 class="header">National Dex</h3>
        <div class="genGrid">
            <div v-for="gen in genArray" :key="gen.number" class="genItem" @click="selectGen(gen)">
                <p>{{ gen.name }}</p>
            </div>
        </div>
    </div>
</template>

<style>
.mainMenu {
    width: 100%;
    height: 90%;
    background: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.header {
    margin-bottom: 50px;
    margin-top: 35px;
}

.genGrid {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
}

.genItem,
p {
    margin: 0;
    text-align: center;
    cursor: pointer;
}
</style>