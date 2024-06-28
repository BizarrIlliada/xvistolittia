<template>
  <div :key="photo?.url" class="photo-container">
    <img v-if="photo" :src="photo.url" :alt="photo.name" loading="lazy" class="photo-container__photo" @load="hideLoader" @error="hideLoader">
    <MyLoader v-if="!isPhotoLoaded" class="photo-container__loader"></MyLoader>
  </div>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue';

  import type { IPhoto } from '@/types';

  interface Props {
    photo: IPhoto | null;
  }

  const props = defineProps<Props>();

  const isPhotoLoaded = ref(false);

  function hideLoader() {
    isPhotoLoaded.value = true;
  }

  watch(() => props.photo?.url, (newUrl, oldUrl) => {
    if (newUrl !== oldUrl) {
      isPhotoLoaded.value = false;
    }
  });
</script>

<style scoped lang="scss">
  .photo-container {
    position: relative;
    min-height: 400px;
    height: min-content;
    width: 100%;
    box-shadow: $app-shadow;

    @include tablet {
      min-height: 200px;
    }

    &__photo {
      display: block;
      width: 100%;
      object-fit: cover;
      object-position: center;
    }

    &__loader {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
    }
  }
</style>
