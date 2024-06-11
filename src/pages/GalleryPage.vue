<template>
  <div class="gallery">
    <PhotoInputComponent v-if="authStore.user"></PhotoInputComponent>
    <h1 class="gallery" v-else>
      Gallery
    </h1>
  </div>
</template>

<script setup lang="ts">
  import PhotoInputComponent from '@/components/shared/PhotoInputComponent.vue';

  import { useAuthStore } from '@/stores/authStore';

  const authStore = useAuthStore();
</script>
