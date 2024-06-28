<template>
  <div class="about-page df df--col">
    <div class="about-page__block df df--col">
      <MySideTag class="about-page__block-side-tag" text="how to contact us" />
      <div class="about-page__block-content df">
        <span class="about-page__block-text about-page__block-text--primary">
          <!-- {{ $t('aboutPage.letsBeInTouch') }} -->
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis?
        </span>
        <!-- <span v-html="$t('aboutPage.villageDescription')" class="about-page__block-text"></span> -->
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem porro voluptas tempore temporibus at molestias praesentium atque omnis eos commodi laudantium cum totam quos id, odio eius nobis enim doloribus amet sapiente facere. Explicabo aspernatur quas quis ipsam dolorem accusamus voluptates quam placeat alias nisi iure eligendi, temporibus recusandae! Alias debitis maxime tempora iusto aperiam illum sunt hic placeat.
        </span>
      </div>
      <div class="about-page__block-content df">
        <PhotoContainerComponent :photo="{ url: secondExamplePhoto, name: 'QR Instagram' }" />
        <PhotoContainerComponent :photo="{ url: firstExamplePhoto, name: 'QR Telegram' }" />
      </div>
    </div>

    <div class="about-page__block df df--col">
      <MySideTag class="about-page__block-side-tag" text="how to find us" />
      <div class="about-page__block-content about-page__block-content--reverse df">
        <span v-html="$t('aboutPage.villageDescription')" class="about-page__block-text"></span>
        <span class="about-page__block-text about-page__block-text--primary">
          {{ $t('aboutPage.youAreAlwaysWelcome') }}
        </span>
      </div>
      <div class="about-page__block-content df">
        <GoogleMapComponent class="about-page__google-map" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import PhotoContainerComponent from '@/components/shared/PhotoContainerComponent.vue';
  import GoogleMapComponent from '@/components/shared/GoogleMapComponent.vue';

  import { useHelpers } from '@/tools/hooks/helpers';

  const { generateUrl } = useHelpers();

  const firstExamplePhoto = generateUrl('@/assets/images/qr_tg.webp');
  const secondExamplePhoto = generateUrl('@/assets/images/qr_inst.webp');
</script>

<style scoped lang="scss">
  .about-page {
    gap: 120px;

    @include tablet {
      gap: 60px;
    }

    &__block {
      position: relative;
      padding-left: 100px;
      gap: 40px;

      @include tablet {
        padding-left: 60px;
      }

      @include phone {
        padding-left: 0;
      }
    }

    &__block-side-tag {
      position: absolute;
      top: 0;
      left: 0;
      transform: rotateZ(-90deg) translateX(-100%);
      transform-origin: top left;

      @include phone {
        display: none;
      }
    }

    &__block-content {
      gap: 30px;

      @include tablet {
        flex-direction: column;
        gap: 30px;
      }

      &--reverse {
        @include tablet {
          flex-flow: column-reverse;
        }
      }

      & > * {
        flex: 1;
      }
    }

    &__block-text {
      &--primary {
        color: $green-900;
        font-size: 24px;
        line-height: 36px;
        font-weight: 600;
        letter-spacing: 5%;
        text-transform: uppercase;
      }
    }

    &__google-map {

    }
  }
</style>
