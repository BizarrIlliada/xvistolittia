<template>
  <div class="home-page df df--col df--aic">
    <!-- FIRST BLOCK -->
    <div class="home-page__block df df-jcsb">
      <div class="home-page__block-content">
        <h2 class="home-page__block-title">
          {{ $t('homePage.title') }}
        </h2>

        <p class="home-page__block-text home-page__block-text--last">
          {{ $t('homePage.gladToSeeYou') }}
        </p>

        <RouterLink :to="{ name: 'InfoPage' }">
          <MyButton>{{ $t('homePage.moreAboutUs') }}</MyButton>
        </RouterLink>
      </div>
      <PhotoContainerComponent :photo="photos ? photos[0] : null" />
    </div>

    <!-- SECOND BLOCK -->
    <div class="home-page__block home-page__block--reversed df df-jcsb">
      <div class="home-page__block-content">
        <h3 class="home-page__block-subtitle">
          Lorem ipsum dolor sit amet
        </h3>

        <p class="home-page__block-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum culpa, inventore minima officiis cum quod, nobis error, quia cumque aut impedit dignissimos. Praesentium, delectus! Atque, nostrum. Porro, minus dolores? Asperiores officiis officia, exercitationem quasi neque vero! Ipsa placeat ipsum quis enim alias ad a libero, porro quasi iure?
        </p>
        <br>
        <p class="home-page__block-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, ratione, amet nesciunt reiciendis magnam soluta tempora veritatis nobis doloremque fuga aperiam, quis adipisci iure placeat?
        </p>
        <br>
        <p class="home-page__block-text home-page__block-text--last">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, facilis? Neque, dolorem tenetur? Consequuntur eligendi est dolores aliquid ipsum libero. Repudiandae, explicabo asperiores.
        </p>
      </div>
      <PhotoContainerComponent :photo="photos ? photos[1] : null" />
    </div>

    <!-- THIRD BLOCK -->
    <div class="home-page__block df df-jcsb">
      <div class="home-page__block-content">
        <h3 class="home-page__block-subtitle">
          Lorem ipsum!
        </h3>

        <p class="home-page__block-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum culpa, inventore minima officiis cum quod, nobis error, quia cumque aut impedit dignissimos. Praesentium, delectus!
        </p>
        <br>
        <p class="home-page__block-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, aperiam facere? Dignissimos adipisci voluptatum velit mollitia, enim dolorem aliquid quisquam rerum eum. Iste, accusantium animi impedit alias vero ut corporis omnis qui ab placeat fugiat nulla hic voluptate cupiditate voluptatibus iusto a id vitae iure.
        </p>
        <br>
        <p class="home-page__block-text home-page__block-text--last">Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>

        <RouterLink :to="{ name: 'GalleryPage' }">
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

  const { fetchPhotosByCategory } = usePhotosApi();

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
      &--last {
        margin-bottom: 40px;

        @include tablet {
          margin-bottom: 22px;
        }
      }
    }
  }
</style>
