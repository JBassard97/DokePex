<script setup lang="ts">
import { defineProps, onMounted, ref, defineEmits } from 'vue';
import { fetchMonDetails } from '@/utils/fetchMonDetails';
import "@/assets/typeColors.css";
// Import 

const props = defineProps<{ pokemonId: number; }>();
const { pokemonId } = props;
const pokemonDetails: any = ref(null);
const emit = defineEmits(['goBack']);
const audioPlayer = ref<HTMLAudioElement | null>(null);
const soundUrl = ref<string>('');
const allSprites: any = ref([]);
const currentIndex = ref<number>(0);
const allAbilities = ref([]);
const allMoves = ref([]);
// Import functions to fetch move and ability details
import {fetchAbilities} from "@/utils/fetchAbilities";
import {fetchMoves} from "@/utils/fetchMoves"

onMounted(async () => {
    try {
        const details = await fetchMonDetails(pokemonId);
        pokemonDetails.value = details;

        const { cries, moves, abilities, sprites } = details;
        soundUrl.value = cries.latest;
        playAudio();

        // Extracting Moves
        let movesArray = [];
        for (const move of moves) {
            let moveObject = {name: move.name};
            const moveResults = await fetchMoves(move.url);
            moveObject.details = moveResults;
            movesArray.push(moveObject);
        }

        allMoves.value = movesArray;

        // Extracting Abilites
        let abilityArray = [];
        for (const ability of abilities) {
            let abilityObject = {name: ability.name};
            const abilityResults = await fetchAbilities(abillity.url);
            abilityObject.details = abilityResults;
            abilityArray.push(abilityObject);
        }
        
        allAbilities.value = abilityArray;
        
        const { versions } = sprites
        const spritesContainer: string[] = [];
        spritesContainer.push(sprites.front_default);

        for (const version in versions) {
            for (const game in versions[version]) {
                if (game !== "icons") {
                    const gameObject = versions[version][game];
                    if (gameObject.animated) {
                        spritesContainer.push(gameObject.animated.front_default);
                    }

                    if (gameObject.front_default !== null) {
                        spritesContainer.push(gameObject.front_default);
                    }
                }
            }
        }

        allSprites.value = spritesContainer.filter(sprite => sprite !== null);
        console.log(allSprites.value);

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

function handlePrev() {
    if (currentIndex.value == 0) {
        currentIndex.value = allSprites.value.length - 1;
    } else {
        currentIndex.value--;
    }
}

function handleNext() {
    if (currentIndex.value == (allSprites.value.length - 1)) {
        currentIndex.value = 0;
    } else {
        currentIndex.value++;
    }
}
</script>

<template>
    <div class="backArrow">
        <img src="@/assets/backArrow.svg" alt="Back Arrow" @click="handleGoBack">
    </div>
    <div v-if="pokemonDetails" class="allDetails">
        <div class="wholeHeader">
            <p class="detailsHeader"> #{{ pokemonDetails.id }} <span class="pokemonName">{{ pokemonDetails.name
                    }}</span></p>
            <p class="typesLine">
                <span v-for="(type, index) in pokemonDetails.types" :key="index">
                    <span :class="type.type.name" class="type">{{ type.type.name }}</span>
                </span>
            </p>
            <div class="carousel">
                <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                    stroke="#1dddf7" transform="matrix(-1, 0, 0, 1, 0, 0)" @click="handlePrev" class="prev">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path
                            d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"
                            fill=""></path>
                    </g>
                </svg>
                <img :src="allSprites[currentIndex]">
                <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                    stroke="#1dddf7" @click="handleNext" class="next">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path
                            d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z"
                            fill=""></path>
                    </g>
                </svg>
            </div>
        </div>
    </div>
    <audio ref="audioPlayer" :src="soundUrl" autoplay></audio>
</template>

<style>
.carousel {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    position: relative;
}

.carousel img {
    margin-top: 10px;
    height: 30%;
    aspect-ratio: 1;
}

.carousel svg {
    cursor: pointer;
}
</style>
