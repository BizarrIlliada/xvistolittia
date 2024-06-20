<template>
  <!-- {{ authStore.user ? 'LOGGED IN' : 'NOT LOGGED IN' }} -->
  <TheHeader></TheHeader>

  <main class="app-main">
    <div class="container">
      <RouterView />
    </div>
  </main>

  <TheFooter></TheFooter>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';
  import { RouterView } from 'vue-router';

  import { useAuthStore } from './stores/authStore';

  import TheHeader from '@/components/TheHeader.vue';
  import TheFooter from '@/components/TheFooter.vue';

  const authStore = useAuthStore();

  onMounted(async () => {
    authStore.initAuth();
  });
</script>

<style scoped lang="scss">
  .app-main {
    display: flex;
    flex-grow: 1;
    padding: 32px 0;
  }
</style>
