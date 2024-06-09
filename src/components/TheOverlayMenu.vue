<template>
  <div class="app-navbar">
    <div class="app-navbar__content container df df--jcsb">
      <TheMainNavigation />
      <TheLangSelector />
    </div>
  </div>
</template>

<script setup lang="ts">
  import TheMainNavigation from '@/components/TheMainNavigation.vue';
  import TheLangSelector from '@/components/TheLangSelector.vue';
</script>

<style scoped lang="scss">
.app-navbar {
  background-color: $green-primary;

  &__content {
  @include phone {
      flex-flow: row-reverse;
    }
  }
}
</style>
