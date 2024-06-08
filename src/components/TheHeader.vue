<template>
  <header class="app-header df df--aic">
    <div class="app-header__container container df df--aic df--jcsb">
      <h1
        class="app-header__title"
        :class="{ 'app-header__title--with-nav': isNavigationOpen }"
        @click.stop="showNavigation"
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


    <Transition name="bar">
      <div
        v-show="isNavigationOpen"
        v-click-outside="{ isShown: isNavigationOpen, handler: closeNavigation }"
        class="app-header__bar"
      >
        <div class="app-header__bar-content container df df--jcsb">
          <TheMainNavigation />
          <TheLangSelector />
        </div>
      </div>
      </Transition>
  </header>
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

  const isNavigationOpen = ref(false);

  function showNavigation() {
    isNavigationOpen.value = !isNavigationOpen.value;
  }

  function closeNavigation() {
    isNavigationOpen.value = false;
  }

  router.afterEach((from, to) => {
    if (from.name !== to.name && isNavigationOpen.value !== false) {
      isNavigationOpen.value = false;
    }
  });
</script>

<style scoped lang="scss">
  .app-header {
    position: relative;
    height: 128px;
    background-color: $app-primary;
    transform-style: preserve-3d;

    &__title {
      cursor: pointer;
      transition: .3s;
      white-space: nowrap;
      user-select: none;

      &:hover,
      &--with-nav {
        color: $orange-primary;
        text-shadow: 2px 2px 2px white;
      }

      span {
        font-size: 20px;
        transition: transform .3s ease;
      }

      &--with-nav {
        span {
          transform: rotate(90deg);
          text-shadow: 2px 0px 2px white;
        }
      }
    }

    &__logo {
      height: 100px;
      cursor: pointer;
    }

    &__bar {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      transform: translate3d(0, 100%, -1px);
      background-color: $green-primary;
    }

    &__bar-content {
      @include phone {
        flex-flow: row-reverse;
      }
    }
  }

  .bar-enter-active,
  .bar-leave-active {
    transition: transform .3s ease;
  }

  .bar-enter-from,
  .bar-leave-to {
    transform: translate3d(0, 0, -1px);
  }
</style>
