<template>
  <div class="home-page df df--col df--aic">
    <div class="home-page__blocks-container">
      <PhotoContentBlockComponent
        v-if="photos && photos[0]"
        :photo="photos[0]"
      >
        <h2 class="home-page__title">
          {{ $t('homePage.title') }}
        </h2>

        <p class="home-page__subtitle">
          {{ $t('homePage.gladToSeeYou') }}
        </p>

        <RouterLink :to="{ name: 'AboutPage' }">
          <MyButton>{{ $t('homePage.moreAboutUs') }}</MyButton>
        </RouterLink>
      </PhotoContentBlockComponent>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';

  import PhotoContentBlockComponent from '@/components/shared/PhotoContentBlockComponent.vue';

  import { fetchPhotosByCategory } from '@/api/photos.api';

  import type { IPhoto } from '@/types';

  const photos = ref<IPhoto[] | null>(null);

  async function loadPhotos() {
    try {
      photos.value = await fetchPhotosByCategory('home');

      console.log(photos.value);
    } catch (error) {
      error;
    }
  }

  onMounted(() => {
    loadPhotos();
  });
</script>

<style scoped lang="scss">
  .home-page {
    &__blocks-container {
      max-width: 960px;

      @include tablet {
        text-align: center;
      }
    }

    &__title {
      font-size: 60px;
      line-height: 78px;
      text-transform: capitalize;
      margin-bottom: 30px;

      @include tablet {
        font-size: 32px;
        line-height: 40px;
        margin-bottom: 12px;
      }
    }

    &__subtitle {
      margin-bottom: 40px;

      @include tablet {
        margin-bottom: 22px;
      }
    }
  }
</style>
