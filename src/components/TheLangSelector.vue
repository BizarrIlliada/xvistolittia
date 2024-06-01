<template>
  <div class="lang-selector">
    <ul class="lang-selector__list">
      <li class="lang-selector__list-item">
        UA
      </li>
      <li class="lang-selector__list-item">
        EN
      </li>
    </ul>
  </div>
</template>

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
