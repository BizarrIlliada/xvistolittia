<template>
  <div class="my-photo-container">
<!-- TODO: create universal photo container -->
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'MyPhotoContainer',
  });
</script>

<style scoped lang="scss">
  .my-photo-container {
    height: min-content;
    width: min-content;

    & :slotted(img) {
      display: block;
      max-height: 400px;
      width: auto;
      box-shadow: $app-shadow;
    }
  }
</style>