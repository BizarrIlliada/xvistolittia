<template>
  <RouterView />

  <main class="app-main">

  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style scoped lang="scss">
.app-main {
  background-color: $main-bgc;
}
</style>
