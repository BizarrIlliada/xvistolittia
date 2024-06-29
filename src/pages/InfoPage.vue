<template>
  <div class="info-page df df--col">
    <div class="info-page__block df df--col">
      <h2 class="info-page__title">
        {{ $t('infoPage.whoWeAre') }}
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cumque quam doloribus fugit et numquam minus, ut commodi natus accusamus ab dolores a, nobis odit nisi recusandae officia? Nostrum consequatur tenetur impedit numquam qui eaque blanditiis. Sint consequuntur molestias praesentium?
        <br>
        <br>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta nostrum nam necessitatibus nemo ipsa enim et. Asperiores eligendi quo, aliquid sed repellat tenetur incidunt doloribus ratione perferendis exercitationem, officiis repellendus. Culpa veritatis ea, perferendis architecto nulla nemo amet hic reiciendis sed? Saepe asperiores dolore quia. Assumenda, harum modi quo eaque architecto, cum asperiores magni blanditiis ipsum eius enim ea tenetur hic reiciendis eveniet est neque adipisci consequatur similique iste! Natus, beatae corrupti laudantium voluptatum qui molestias facere nisi perferendis dolorem eveniet dolor. Doloremque, alias quisquam?
        <br>
        <br>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt rerum nostrum nihil doloremque deleniti inventore nisi recusandae officiis ipsam ipsum ut labore, amet nemo eaque quam commodi. Modi, cupiditate quibusdam!
      </p>

      <PhotoContainerComponent :photo="{ url: sirko, name: 'Sirko' }" />
    </div>

    <div class="info-page__block df df--col">
      <MySideTag class="info-page__block-side-tag" text="contact us" />
      <div class="info-page__block-content df">
        <span class="info-page__block-title">
          {{ $t('infoPage.letsBeInTouch') }}
        </span>
        <div>
          <ul class="info-page__contacts-list df df--col">
            <li class="info-page__contacts-item">
              <a href="tel:+380 98 020 46 03" class="info-page__contacts-link df">
                <span class="pi pi-phone"></span>
                +380 (98) 020 46 03
              </a>
            </li>
            <li class="info-page__contacts-item">
              <a href="https://t.me/illiada_bo" target="_blank" class="info-page__contacts-link df">
                <span class="pi pi-telegram"></span>
                @illiada_bo
              </a>
            </li>
            <li class="info-page__contacts-item">
              <a href="https://www.instagram.com/xvistolittia/" target="_blank" class="info-page__contacts-link df">
                <span class="pi pi-instagram"></span>
                @xvistolittia
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="info-page__block-content df">
        <a href="https://t.me/illiada_bo" target="_blank" class="info-page__contact df">
          <PhotoContainerComponent :photo="{ url: telegramQrImage, name: 'QR Telegram' }" />
        </a>
        <a href="https://www.instagram.com/xvistolittia/" target="_blank" class="info-page__contact df">
          <PhotoContainerComponent :photo="{ url: instagramQrImage, name: 'QR Instagram' }" />
        </a>
      </div>
    </div>

    <div class="info-page__block df df--col">
      <MySideTag class="info-page__block-side-tag" text="find us" />
      <div class="info-page__block-content info-page__block-content--reverse df">
        <span v-html="$t('infoPage.villageDescription').replace('\n', '<br>')" class="info-page__block-text"></span>
        <span class="info-page__block-title">
          {{ $t('infoPage.youAreAlwaysWelcome') }}
        </span>
      </div>
      <div class="info-page__block-content df">
        <GoogleMapComponent class="info-page__google-map" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import PhotoContainerComponent from '@/components/shared/PhotoContainerComponent.vue';
  import GoogleMapComponent from '@/components/shared/GoogleMapComponent.vue';

  import telegramQrImage from '@/assets/images/qr_tg.webp';
  import instagramQrImage from '@/assets/images/qr_inst.webp';

  import sirko from '@/assets/images/mockup/IMG_6525.jpg';
</script>

<style scoped lang="scss">
  .info-page {
    gap: 120px;

    @include tablet {
      gap: 60px;
    }

    &__title {
      color: $green-900;
      font-size: 32px;
      line-height: 40px;
      font-weight: 600;
      letter-spacing: 5%;
      text-transform: uppercase;
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

    &__block-title {
      color: $green-900;
      font-size: 24px;
      line-height: 36px;
      font-weight: 600;
      letter-spacing: 5%;
      text-transform: uppercase;
    }

    &__contacts-list {
      gap: 8px;
    }

    &__contacts-item {
      width: min-content;
      white-space: nowrap;
    }

    &__contacts-link {
      gap: 8px;
    }
  }
</style>
