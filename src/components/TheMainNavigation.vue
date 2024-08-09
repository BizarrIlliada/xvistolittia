<template>
  <nav class="nav">
    <ul class="nav__list df df--aic">
      <li v-for="link in navLinks" :key="link.to.name" class="nav__item">
        <RouterLink
          :to="link.to"
          class="nav__link"
          active-class="nav__link--active"
        >
          {{ $t(link.label) }}
        </RouterLink>
      </li>
      <li v-if="authStore.user" class="nav__item">
        <span class="nav__link" @click="logout">
          {{ $t('shared.logout') }}
        </span>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
  import { useRouter } from 'vue-router';
  import { useAuthStore } from '@/stores/authStore';

  const router = useRouter();
  const authStore = useAuthStore();

  const navLinks: { to: { name: string }, label: string }[] = [
    {
      to: { name: 'HomePage' },
      label: 'shared.tabs.home',
    },
    ...(import.meta.env.VITE_IS_GALLERY_PAGE_HIDDEN === 'true' ? [{
      to: { name: 'GalleryPage' },
      label: 'shared.tabs.gallery',
    }] : []),
    {
      to: { name: 'InfoPage' },
      label: 'shared.tabs.info',
    },
  ];

  async function logout() {
    await authStore.logout();

    router.push({ name: 'AuthPage' });
  }
</script>

<style scoped lang="scss">
  .nav {
    &__list {
      list-style: none;
      height: 100%;
      gap: 16px;
      padding: 20px 0;

      @include phone {
        flex-direction: column;
        align-items: end;
      }
    }

    &__link {
      color: $app-primary;
      font-size: 22px;
      line-height: 22px;
      font-weight: 700;
      letter-spacing: 1.5px;
      transition: color .3s ease;
      text-transform: uppercase;
      cursor: pointer;

      &:hover {
        color: #fff;
      }

      &--active {
        color: #fff;
      }
    }
  }
</style>
