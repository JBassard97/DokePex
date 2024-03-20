<!-- ! Corner Clip on ScreenChassis -->

<template>
    <div class="cutout"></div>
</template>

<style>
.cutout {
    position: absolute;
    bottom: -4px;
    left: -4px;
    width: 70px;
    height: 70px;
    background: #d30940;
    clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
    transform: rotate(270deg);
}
</style>