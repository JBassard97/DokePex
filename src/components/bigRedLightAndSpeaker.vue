<template>
    <div class="bigRedLightAndSpeaker">
        <div class="bigRedLight"></div>
        <div class="speaker">
            <div class="hole"></div>
            <div class="hole"></div>
            <div class="hole"></div>
            <div class="hole"></div>
        </div>
    </div>
</template>

<style>
.bigRedLightAndSpeaker {
    width: 70%;
    height: 45px;
    position: absolute;
    bottom: 10px;
    display: flex;
    justify-content: space-between;

}

.bigRedLight {
    aspect-ratio: 1;
    height: 30px;
    border-radius: 50%;
    background: #b91446;
    border: 2px solid rgba(3, 5, 5, 0.5);
}

.speaker {
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.hole {
    width: 90%;
    height: 5px;
    background: #282828;
    border-radius: 10px;
}

@media (max-width: 400px) {
    .bigRedLightAndSpeaker {
        bottom: 5px;
        height: 30px;
        margin-left: 40px;
    }
}
</style>