<template>

    <div class="greenScreen"></div>

</template>

<style>
.greenScreen {
    width: 50%;
    height: 100px;
    background: #51ae5e;
    border-radius: 10px;
    border: 4px solid rgba(28, 46, 46, 0.3);
    display: flex;
    flex-wrap: wrap;
}

@media (max-width: 580px) {
    .greenScreen {
        scale: 0.95;
    }
}
</style>