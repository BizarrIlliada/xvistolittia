<template>
  <div class="home-page">
    <!-- TODO: connect firebase backend for photo storage -->
    <!-- <MyPhotoContainer>
      <img src="../assets/photos/photo(1).webp" alt="Lial'ka with Mar'iana">
    </MyPhotoContainer> -->
    <PhotoInputComponent></PhotoInputComponent>
  </div>
</template>

<script setup lang="ts">
  import PhotoInputComponent from '@/components/shared/PhotoInputComponent.vue';
</script>

<style scoped lang="scss">
  .home-page {

  }
</style>
