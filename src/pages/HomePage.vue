<template>
  <div class="home-page df df--col df--aic">
    <!-- FIRST BLOCK -->
    <div v-parallax="0.04" class="home-page__block df df-jcsb">
      <div class="home-page__block-content">
        <h2 class="home-page__block-title">
          {{ $t('homePage.title') }}
        </h2>

        <p class="home-page__block-text">
          {{ $t('homePage.gladToSeeYou') }}
        </p>

        <RouterLink :to="{ name: 'InfoPage' }">
          <MyButton>{{ $t('homePage.moreAboutUs') }}</MyButton>
        </RouterLink>
      </div>
      <PhotoContainerComponent :photo="photos ? photos[0] : null" />
    </div>

    <!-- SECOND BLOCK -->
    <div v-parallax="-0.02" class="home-page__block home-page__block--reversed df df-jcsb">
      <div class="home-page__block-content">
        <h3 class="home-page__block-subtitle">
          {{ $t('homePage.ourStoryTitle') }}
        </h3>

        <p v-html="$t('homePage.ourStory').replace(/\n/g, '<br><br>')" class="home-page__block-text"></p>
      </div>

      <PhotoContainerComponent :photo="photos ? photos[1] : null" />
    </div>

    <!-- THIRD BLOCK -->
    <div v-parallax="0.05" class="home-page__block df df-jcsb">
      <div class="home-page__block-content">
        <h3 class="home-page__block-subtitle">
          {{ $t('homePage.ourMissionTitle') }}
        </h3>

        <p v-html="$t('homePage.ourMission').replace(/\n/g, '<br><br>')" class="home-page__block-text"></p>

        <RouterLink :to="{ name: 'InfoPage' }">
          <MyButton severity="secondary">
            {{ $t('homePage.goToAdventure') }}
          </MyButton>
        </RouterLink>
      </div>
      <PhotoContainerComponent :photo="photos ? photos[2] : null" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue';

  import PhotoContainerComponent from '@/components/shared/PhotoContainerComponent.vue';

  import { usePhotosApi } from '@/api/photos.api';

  import type { IPhoto } from '@/types';

  const { fetchAlbumByName } = usePhotosApi();

  const photos = ref<IPhoto[] | null>(null);

  async function loadPhotos() {
    try {
      photos.value = await fetchAlbumByName('home');
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
    gap: 120px;

    @include tablet {
      gap: 50px;
    }

    &__block {
      max-width: 960px;
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
    }

    &__block-content {
      max-width: 50%;
      flex-grow: 1;

      @include tablet {
        width: 100%;
        max-width: 100%;
      }
    }

    &__block-title {
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

    &__block-subtitle {
      color: $green-900;
      font-size: 36px;
      line-height: 40px;
      text-transform: uppercase;
      margin-bottom: 30px;

      @include tablet {
        font-size: 22px;
        line-height: 28px;
        margin-bottom: 12px;
      }
    }

    &__block-text {
      margin-bottom: 40px;

      @include tablet {
        margin-bottom: 22px;
      }
    }
  }
</style>
