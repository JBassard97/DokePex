<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="face closed">
    <RouterLink to="/about" class="openLink" />
    <div class="allLights">
      <div class="bigBlueLight"></div>
      <div class="threeLights">
        <div class="redLight"></div>
        <div class="yellowLight"></div>
        <div class="greenLight"></div>
      </div>
    </div>
    <div class="flapDoor">
      <svg width="100%" height="90" viewBox="0 0 300 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="2" dy="2" stdDeviation="4" flood-color="black" flood-opacity="1" />
          </filter>
        </defs>
        <path d="M 0 80 L 80 80 C 120 80, 170 40, 230 40 L 300 40" stroke="black" fill="none" stroke-width="2"
          stroke-linecap="round" filter="url(#shadow)" />
      </svg>
    </div>

    <div class="triangle">
      <svg width="40px" height="60px">
        <polygon points="2,2 30,30 2,58" fill="rgb(255,205,0)" stroke="black" stroke-width="2" />
      </svg>
    </div>

    <div class="footer">
      <div class="divot"></div>
    </div>
  </div>
</template>

<style>
.face {
  background: #db092c;
  border-radius: 20px;
  width: 75vw;
  height: 95vh;
  overflow: hidden;
  position: relative;
}

.openLink {
  position: absolute;
  z-index: 2;
  cursor: pointer;
  width: 100%;
  height: 100%;
}

.allLights {
  max-width: 200px;
  height: 60px;
  display: flex;
  margin-left: 10px;
  margin-top: 10px;
}

.bigBlueLight {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid white;
  background: #12b6ca;
  align-self: center;
  margin-right: -4px;
}

.threeLights {
  width: 100px;
  height: 25px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.redLight,
.yellowLight,
.greenLight {
  border-radius: 50%;
  border: 2px solid black;
  width: 15px;
  height: 15px;
}

.redLight {
  background: #c31e37;
}

.yellowLight {
  background: #b3be16;
}

.greenLight {
  background: #518454;
}

.flapDoor {
  position: absolute;
  width: 100%;
  top: 2px;
}

.footer {
  position: absolute;
  width: 100%;
  bottom: 50px;
  display: flex;
  justify-content: center;
}

.divot {
  width: 50%;
  margin: 10px;
  height: 15px;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.26);
  box-shadow: rgba(50, 50, 93, 0.15) 0px 16px 60px -2px inset, rgba(0, 0, 0, 0.2) 0px 0px 0px inset;
}

.triangle {
  position: absolute;
  top: 50%;
  left: 20px;
}

.triangle:hover {
  fill: yellow;
}
</style>
