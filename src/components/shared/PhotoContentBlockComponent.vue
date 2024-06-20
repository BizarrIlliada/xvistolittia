<template>
  <div :key="photo?.url" class="photo-content-block df df--jcsb" :class="{ 'photo-content-block--reversed': reversed }">
    <div v-if="$slots.default" class="photo-content-block__container df df--col df--ais">
      <slot></slot>
    </div>

    <div class="photo-content-block__photo-container">
      <img v-if="photo" :src="photo.url" :alt="photo.name" loading="lazy" class="photo-content-block__photo" @load="hideLoader" @error="hideLoader">
      <MyLoader v-if="!isPhotoLoaded" class="photo-content-block__loader"></MyLoader>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, watch } from 'vue';

  import MyLoader from '../UI/MyLoader.vue';
  import type { IPhoto } from '@/types';

  interface Props {
    photo: IPhoto | null;
    reversed?: boolean;
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
  .photo-content-block {
    align-items: stretch;
    gap: 20px;

    &--reversed {
      flex-flow: row-reverse;
    }

    @include tablet {
      flex-direction: column;
      gap: 24px;
      flex-flow: column-reverse;
      align-items: center;
    }

    &__container {
      max-width: 50%;
      flex-grow: 1;

      @include tablet {
        width: 100%;
        max-width: 100%;
      }
    }

    &__photo-container {
      position: relative;
      flex-grow: 1;
      min-height: 150px;
      width: 100%;
      box-shadow: $app-shadow;
    }

    &__photo {
      display: block;
      width: 100%;
      object-fit: cover;
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
