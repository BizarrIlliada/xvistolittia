<template>
  <div class="gallery">
    <PhotoInputComponent v-if="authStore.user" @onPhotoAdded="loadPhotos('general')"></PhotoInputComponent>
    <div class="gallery" v-if="photos?.length">
      <img v-for="photo in photos" :key="photo.url" :src="photo.url" :alt="photo.name">
    </div>
  </div>
</template>


<script setup lang="ts">
  //TODO: create gallery with different albums and carousel

  import { onMounted, ref } from 'vue';
  import PhotoInputComponent from '@/components/shared/PhotoInputComponent.vue';

  import { type IPhoto, type TPhotoCategory } from '@/types';

  import { useAuthStore } from '@/stores/authStore';

  import { fetchPhotosByCategory } from '@/api/photos.api';

  const authStore = useAuthStore();

  const photos = ref<IPhoto[] | null>(null);

  async function loadPhotos(categoryName: TPhotoCategory) {
    try {
      photos.value = await fetchPhotosByCategory(categoryName);

      console.log(photos.value);
    } catch (error) {
      //TODO: add alert
      console.log(error);
    }
  }

  onMounted(() => {
    loadPhotos('general');
  });
</script>

<style scoped lang="scss">
  img {
    height: 250px;
  }
</style>
