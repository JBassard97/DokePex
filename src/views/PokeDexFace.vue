<script setup lang="ts">
import { RouterLink } from "vue-router";
import allLights from "../components/allLights.vue";
import dividingLine from "@/components/dividingLine.vue";
import yellowTriangle from "@/components/yellowTriangle.vue";
import closedDivot from "@/components/closedDivot.vue";
</script>

<template>
  <div class="face closed">
    <RouterLink to="/open" class="openLink" />
    <allLights></allLights>
    <dividingLine></dividingLine>
    <yellowTriangle></yellowTriangle>
    <closedDivot></closedDivot>

  </div>
</template>

<style>
.face {
  background: #d30940;
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
</style>
