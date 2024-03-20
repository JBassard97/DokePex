<script setup lang="ts">
const handleDirection = (direction: string) => {
    console.log('Pressed', direction);
};
</script>

<template>
    <div class="dPad">
        <div class="up square" @click="handleDirection('up')">
            <div class="indent"></div>
        </div>
        <div class="right square" @click="handleDirection('right')">
            <div class="indent"></div>
        </div>
        <div class="center square">
            <div class="dot"></div>
        </div>
        <div class="down square" @click="handleDirection('down')">
            <div class="indent"></div>
        </div>
        <div class="left square" @click="handleDirection('left')">
            <div class="indent"></div>
        </div>
    </div>
</template>

<style>
.dPad {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    width: 90px;
    height: 90px;
}

.square {
    width: 30px;
    height: 30px;
    background: darkslategrey;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid rgba(28, 46, 46, 0.5);
}

.indent {
    width: 40%;
    height: 2px;
    background-color: rgba(28, 46, 46, 0.5);
    transform-origin: center;
}

.dot {
    width: 10px;
    height: 10px;
    background: rgba(28, 46, 46, 0.5);
    border-radius: 50%;
}

.up,
.right,
.down,
.left {
    cursor: pointer;
}

.up {
    grid-column: 2;
    grid-row: 1;
    border-width: 3px 3px 0px 3px;
}

.right {
    grid-column: 3;
    grid-row: 2;
    border-width: 3px 3px 3px 0px;
}

.center {
    grid-column: 2;
    grid-row: 2;
    border-width: 0px;
    width: 36px;
    height: 36px;
    position: relative;
}

.down {
    grid-column: 2;
    grid-row: 3;
    border-width: 0px 3px 3px 3px;
}

.left {
    grid-column: 1;
    grid-row: 2;
    border-width: 3px 0px 3px 3px;
}

.up .indent,
.down .indent {
    transform: rotate(90deg);
}

@media (max-width: 469px) {
    .dPad {
        scale: 0.7;
    }

    .center {
        scale: 1.1;
    }
}
</style>
