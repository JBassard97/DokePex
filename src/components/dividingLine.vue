<script setup lang="ts">
</script>

<template>
    <div class="flapDoor">
        <svg width="100%" height="90" viewBox="0 0 300 100" preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="2" dy="2" stdDeviation="4" flood-color="black" flood-opacity="1" />
                </filter>
            </defs>
            <path d="M 0 80 L 80 80 C 120 80, 170 40, 230 40 L 300 40" stroke="black" fill="none" stroke-width="2"
                stroke-linecap="round" filter="url(#shadow)" />
        </svg>
    </div>
</template>

<style>
.flapDoor {
    position: absolute;
    width: 100%;
    top: 2px;
}
</style>