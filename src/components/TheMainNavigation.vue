<template>
  <nav class="nav">
    <ul class="nav__list df df--aic">
      <li v-for="link in navLinks" :key="link.to.name" class="nav-item">
        <RouterLink
          :to="link.to"
          class="nav__link"
          active-class="nav__link--active"
        >
          {{ $t(link.label) }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
  const navLinks = [
    {
      to: { name: 'HomePage' },
      label: 'shared.home',
    },
    {
      to: { name: 'GalleryPage' },
      label: 'shared.gallery',
    },
    {
      to: { name: 'AboutPage' },
      label: 'shared.aboutUs',
    },
  ];
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

      &:hover {
        color: #fff;
      }

      &--active {
        color: #fff;
      }
    }
  }
</style>
