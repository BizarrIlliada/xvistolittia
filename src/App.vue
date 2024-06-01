<template>
  <TheHeader></TheHeader>

  <main class="app-main">
    <div class="container">
      <RouterView />
    </div>
  </main>

  <TheFooter></TheFooter>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';

import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
</script>

<style scoped lang="scss">
.app-main {
  flex-grow: 1;
}
</style>
