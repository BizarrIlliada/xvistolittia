<template>
  <!-- TODO: hide overlay on swipe -->
<!-- TODO: always hide on swipe down and show on swipe up -->
  <div class="app-header-wrapper">
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

    <Transition name="overlay">
      <div
        v-show="isOverlayOpen"
        v-click-outside="{ isShown: isOverlayOpen, handler: closeOverlay }"
        class="app-header-overlay"
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
  .app-header-wrapper {
    position: relative;
    height: 128px;
  }

  .app-header {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    box-shadow: #0000001A 0px 2px 4px -1px;
    height: 128px;
    background-color: $app-primary;
    z-index: 100;

    @include tablet {
      position: relative;
    }

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

      @include tablet {
        height: 80px;
      }

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  .app-header-overlay {
    z-index: 99;
    position: fixed;
    top: 128px;
    left: 0;
    right: 0;
    background-color: $green-primary;
    box-shadow: #32325D40 0px 15px 30px -12px inset, #0000004D 0px 9px 18px -9px inset;

    @include tablet {
      position: absolute;
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
    transform: translateY(-100%);
  }
</style>
