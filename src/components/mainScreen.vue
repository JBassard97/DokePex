<script setup lang="ts">
import { ref, onMounted, markRaw } from 'vue';
import MainMenu from '@/components/MainMenu.vue';
import Dexes from "./RegionDexes/index";
import PokemonDetails from './PokemonDetails.vue';

const animationComplete = ref(false);
const currentComponent: any = ref(null);
const selectedGeneration = ref(0);
const selectedPokemonId: any = ref(null);
const previousComponent: any = ref(null);

onMounted(() => { console.log("Mounted"); currentComponent.value = ''; })

function handleAnimationEnd() {
    animationComplete.value = true;
    console.log("animation done");
    updateCurrentComponent(MainMenu);
}

function updateCurrentComponent(newComponent: any) {
    if (newComponent === MainMenu || newComponent === PokemonDetails) {
        previousComponent.value = currentComponent.value;
    } else if (newComponent === Dexes.KantoDex ||
        newComponent === Dexes.JohtoDex ||
        newComponent === Dexes.HoennDex ||
        newComponent === Dexes.SinnohDex ||
        newComponent === Dexes.UnovaDex ||
        newComponent === Dexes.KalosDex ||
        newComponent === Dexes.AlolaDex ||
        newComponent === Dexes.GalarDex) {
        previousComponent.value = MainMenu;
    }
    currentComponent.value = markRaw(newComponent);
}
// function updateCurrentComponent(newComponent: any) {

//     previousComponent.value = currentComponent.value;
//     currentComponent.value = markRaw(newComponent);
// }

function handleGenSelection(genNumber: number) {
    console.log("selected generation:", genNumber);
    selectedGeneration.value = genNumber;
    switch (genNumber) {
        case 1:
            updateCurrentComponent(Dexes.KantoDex);
            // currentComponent.value = Dexes.KantoDex;
            break;
        case 2:
            updateCurrentComponent(Dexes.JohtoDex);
            break;
        case 3:
            updateCurrentComponent(Dexes.HoennDex);
            break;
        case 4:
            updateCurrentComponent(Dexes.SinnohDex);
            break;
        case 5:
            updateCurrentComponent(Dexes.UnovaDex);
            break;
        case 6:
            updateCurrentComponent(Dexes.KalosDex);
            break;
        case 7:
            updateCurrentComponent(Dexes.AlolaDex);
            break;
        case 8:
            updateCurrentComponent(Dexes.GalarDex);
            break;
    }
    // currentComponent.value=useASwitchStateMentToRenderOneOfEightComponents
}

const goBack = () => {
    updateCurrentComponent(previousComponent.value);
};

function handleViewPokemon(pokemonId: number) {
    selectedPokemonId.value = pokemonId;
    updateCurrentComponent(PokemonDetails);
}

</script>

<template>
    <div class="screen flash" @animationend="handleAnimationEnd">
        <component :is="currentComponent" :genNumber="selectedGeneration" :pokemonId="selectedPokemonId"
            @selectGeneration="handleGenSelection" @viewPokemon="handleViewPokemon" @goBack="goBack">
        </component>
    </div>
</template>

<style>
.screen {
    border-radius: 15px;
    width: 90%;
    height: 75%;
    overflow: scroll;
}

.screen::-webkit-scrollbar {
    display: none;
}

/* Flash animation */
@keyframes flashAnimation {
    0% {
        background-color: #282828;
        box-shadow: none;
        /* Start with dark background color */
    }

    50% {
        background-color: #83f3f9;
        box-shadow: 0 0 10px 5px rgba(131, 243, 249, 0.7);
        /* Flash to light background color */
    }

    100% {
        background-color: #83f3f9;
        box-shadow: 0 0 10px 5px rgba(131, 243, 249, 0.7);
        /* End with #0cecf6 background */
    }
}

.flash {
    animation: flashAnimation 0.4s ease-in-out 2 0.7s;
    animation-fill-mode: forwards;
    background-color: #282828;
    /* Initial dark background color */
}
</style>