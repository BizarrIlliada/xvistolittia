<template>
  <div class="home-page df df--col df--aic">
    <div v-if="photos" class="home-page__blocks-container df df--col">
      <PhotoContentBlockComponent
        v-if="photos[0]"
        :photo="photos[0]"
      >
        <h2 class="home-page__title">
          {{ $t('homePage.title') }}
        </h2>

        <p class="home-page__text home-page__text--last">
          {{ $t('homePage.gladToSeeYou') }}
        </p>

        <RouterLink :to="{ name: 'AboutPage' }">
          <MyButton>{{ $t('homePage.moreAboutUs') }}</MyButton>
        </RouterLink>
      </PhotoContentBlockComponent>

      <PhotoContentBlockComponent
        v-if="photos[1]"
        :photo="photos[1]"
        reversed
      >
        <h3 class="home-page__subtitle">
          Lorem ipsum dolor sit amet
        </h3>

        <p class="home-page__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum culpa, inventore minima officiis cum quod, nobis error, quia cumque aut impedit dignissimos. Praesentium, delectus! Atque, nostrum. Porro, minus dolores? Asperiores officiis officia, exercitationem quasi neque vero! Ipsa placeat ipsum quis enim alias ad a libero, porro quasi iure?
        </p>
        <br>
        <p class="home-page__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, ratione, amet nesciunt reiciendis magnam soluta tempora veritatis nobis doloremque fuga aperiam, quis adipisci iure placeat?
        </p>
        <br>
        <p class="home-page__text home-page__text--last">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, facilis? Neque, dolorem tenetur? Consequuntur eligendi est dolores aliquid ipsum libero. Repudiandae, explicabo asperiores.</p>
      </PhotoContentBlockComponent>

      <PhotoContentBlockComponent
        v-if="photos[2]"
        :photo="photos[2]"
      >
        <h3 class="home-page__subtitle">
          Lorem ipsum!
        </h3>

        <p class="home-page__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum culpa, inventore minima officiis cum quod, nobis error, quia cumque aut impedit dignissimos. Praesentium, delectus!
        </p>
        <br>
        <p class="home-page__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, aperiam facere? Dignissimos adipisci voluptatum velit mollitia, enim dolorem aliquid quisquam rerum eum. Iste, accusantium animi impedit alias vero ut corporis omnis qui ab placeat fugiat nulla hic voluptate cupiditate voluptatibus iusto a id vitae iure.
        </p>
        <br>
        <p class="home-page__text home-page__text--last">Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>

        <RouterLink :to="{ name: 'GalleryPage' }">
          <MyButton severity="secondary">
            {{ $t('homePage.goToAdventure') }}
          </MyButton>
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
      gap: 120px;

      @include tablet {
        // text-align: center;
        gap: 50px;
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

    &__text {
      &--last {
        margin-bottom: 40px;

        @include tablet {
          margin-bottom: 22px;
        }
      }
    }
  }
</style>
