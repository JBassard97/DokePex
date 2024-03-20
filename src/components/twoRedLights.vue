<template>
    <div class="twoRedLights">
        <div class="screenRedLight"></div>
        <div class="screenRedLight"></div>
    </div>
</template>

<style>
.twoRedLights {
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: center;
    align-self: flex-start;
    position: absolute;
    top: 30px;
}

.screenRedLight {
    background: #b91446;
    border: 2px solid rgba(3, 5, 5, 0.5);
    width: 15px;
    height: 15px;
    border-radius: 50%;
    margin: 0px 15px;
}

@media (max-width: 469px) {
    .twoRedLights {
        top: 15px;
    }
}
</style>