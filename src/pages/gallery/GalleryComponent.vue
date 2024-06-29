<template>
  <div class="gallery">
    <PhotoContainerComponent
      v-for="photo in photos"
      :key="photo.url"
      :photo="photo"
      class="gallery__photo"
    />
  </div>
</template>

<script setup lang="ts">
  import PhotoContainerComponent from '@/components/shared/PhotoContainerComponent.vue';

  import type { IPhoto } from '@/types';

  interface Props {
    photos: IPhoto[];
  }

  defineProps<Props>();
</script>

<style scoped lang="scss">
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;

    &__photo {
      height: 100%;
      max-height: 400px;

      &--hor {
        grid-column: span 2;
      }
    }
  }
</style>
