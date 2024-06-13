<template>
  <div class="photo-content-block df df--jcsb df--ais" :class="{ 'photo-content-block--reversed': reversed }">
    <div class="photo-content-block__container">
      <slot></slot>
    </div>

    <div class="photo-content-block__photo-container df df--jcc">
      <img :src="photo.url" :alt="photo.name" loading="lazy" class="photo-content-block__photo">
    </div>
  </div>
</template>

<script setup lang="ts">
  import type { IPhoto } from '@/types';

  interface Props {
    photo: IPhoto;
    reversed?: boolean;
  }

  defineProps<Props>();
</script>

<style scoped lang="scss">
  .photo-content-block {
    gap: 20px;

    &--reversed {
      flex-flow: row-reverse;
    }

    @include tablet {
      flex-direction: column;
      gap: 12px;
      flex-flow: column-reverse;
      align-items: center;
    }

    &__container {
      max-width: 50%;

      @include tablet {
        max-width: 100%;
      }
    }

    &__photo {
      max-width: 100%;
      box-shadow: $app-shadow;
      object-fit: cover;

      @include tablet {
        margin-bottom: 12px;
      }
    }
  }
</style>
