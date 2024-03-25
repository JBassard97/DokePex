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
    margin-bottom: 20px;
    margin-top: 20px;
}

.genGrid {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
}

.genItem {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
}

.genItem
p {
    margin: 0;
    text-align: center;
    cursor: pointer;
    padding: 0px 0px;
    width: 70px;
    padding: 10px 0px;
    border-radius: 20px;
    transition: scale .2s ease-in-out, background .2s ease-in-out;
    background: rgba(245, 245, 245, 0.527);
}

.genItem p:hover{
    scale: 1.2;
    background: whitesmoke;
}
</style>