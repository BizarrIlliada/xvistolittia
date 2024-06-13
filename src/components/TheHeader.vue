<template>
  <!-- TODO: change header and overlay relations) -->
  <header class="app-header df df--aic">
    <div class="app-header__container container df df--aic df--jcsb">
      <h1
        class="app-header__title"
        :class="{ 'app-header__title--with-overlay': isOverlayOpen }"
        @click.stop="showOverlay"
      >
        XVIStolittia
        <span class="pi pi-angle-right"></span>
      </h1>

      <picture>
        <source srcset="../assets/images/XVIStolittiaLogo(1).webp" type="image/webp">
        <img
          class="app-header__logo"
          src="../assets/images/XVIStolittiaLogo(1).png"
          alt="Main Logo"
          @click="goToHomePage"
        >
      </picture>
    </div>
  </header>

  <div class="app-header-overlay">
    <Transition name="overlay">
      <div
        v-show="isOverlayOpen"
        v-click-outside="{ isShown: isOverlayOpen, handler: closeOverlay }"
        class="app-header-overlay__body"
      >
        <div class="app-header-overlay__content container df df--jcsb">
          <TheMainNavigation />
          <TheLangSelector />
        </div>
      </div>
      </Transition>
  </div>
</template>

<script setup lang="ts">
  import TheMainNavigation from '@/components/TheMainNavigation.vue';
  import TheLangSelector from '@/components/TheLangSelector.vue';

  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  function goToHomePage() {
    router.push({ name: 'HomePage' });
  }

  const isOverlayOpen = ref(false);

  function showOverlay() {
    isOverlayOpen.value = !isOverlayOpen.value;
  }

  function closeOverlay() {
    isOverlayOpen.value = false;
  }

  router.afterEach((from, to) => {
    if (from.name !== to.name && isOverlayOpen.value !== false) {
      isOverlayOpen.value = false;
    }
  });
</script>

<style scoped lang="scss">
  .app-header {
    height: 128px;
    background-color: $app-primary;
    z-index: 100;

    &__title {
      // color: $green-900;
      cursor: pointer;
      transition: .3s;
      white-space: nowrap;
      user-select: none;

      &:hover,
      &--with-overlay {
        color: $orange-primary;
        text-shadow: 2px 2px 2px white;
      }

      span {
        font-size: 20px;
        transition: transform .3s ease;
      }

      &--with-overlay {
        span {
          transform: rotate(90deg);
          text-shadow: 2px 0px 2px white;
        }
      }
    }

    &__logo {
      height: 100px;
      cursor: pointer;
      transition: transform .2s;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  .app-header-overlay {
    position: relative;
    z-index: 99;

    &__body {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      transform: translateY(100%);
      background-color: $green-primary;
    }

    &__content {
      @include phone {
        flex-flow: row-reverse;
      }
    }
  }

  .overlay-enter-active,
  .overlay-leave-active {
    transition: transform .3s ease;
  }

  .overlay-enter-from,
  .overlay-leave-to {
    transform: translateY(0);
  }
</style>
