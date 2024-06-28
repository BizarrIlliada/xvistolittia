<template>
  <div class="my-loader df df--aic df--jcc">
    <div class="my-loader__spinner">
    </div>
  </div>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'MyLoader',
  });
</script>

<style scoped lang="scss">
  @import '@/assets/styles/utils/_animations.scss';

  .my-loader {
    height: 100%;
    width: 100%;

    &__spinner {
      border: 8px solid #0E4F2626;
      border-left-color: $green-900;
      border-radius: 50%;
      width: 64px;
      height: 64px;
      animation: rotating .5s alternate-reverse infinite;
    }
  }
</style>
