<template>
  <div class="lang-selector">
    <ul class="lang-selector__list">
      <li
        v-for="language in languages"
        :key="language.value"
        @click="onChangeLang(language.value)"
        class="lang-selector__list-item"
      >
        {{ language.label }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { useI18n } from 'vue-i18n';

  const languages = [
    { label: 'EN', value: 'en' },
    { label: 'UA', value: 'uk' },
  ];

  const { locale } = useI18n();

  function onChangeLang(val: string) {
    locale.value = val;
    localStorage.setItem('currentLang', locale.value);
  }
</script>

<style scoped lang="scss">
  .lang-selector {
    &__list {
      list-style: none;
      height: 100%;
      padding: 20px 0;
    }

    &__list-item {
      color: $app-primary;
      font-size: 22px;
      line-height: 22px;
      font-weight: 700;
      letter-spacing: 1.5px;
      transition: color .3s ease;
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
