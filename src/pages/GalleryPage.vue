<template>
  <div class="gallery-page">
    <TabsComponent :tabs="tabs" :selectedTab="selectedTab" @onTabSelect="changeTab($event)">
      <img v-if="exampleTabImage" :src="exampleTabImage.url" :alt="exampleTabImage.name">
    </TabsComponent>

    <PhotoInputComponent
      v-if="authStore.user"
      collectionName="general"
      @onPhotoAdded="loadPhotos('general')"
    ></PhotoInputComponent>
  </div>
</template>


<script setup lang="ts">
  //TODO: create gallery with different albums and carousel

  import { computed, onMounted, ref } from 'vue';

  import PhotoInputComponent from '@/components/shared/PhotoInputComponent.vue';
  import TabsComponent from '@/components/shared/TabsComponent.vue';

  import { type IPhoto, type TPhotoCategory } from '@/types';

  import { useAuthStore } from '@/stores/authStore';

  import { fetchPhotosByCategory } from '@/api/photos.api';

  const authStore = useAuthStore();

  const tabs = [
    'Camp',
    'Summer',
    'Winter',
    'Fall',
    'Spring',
  ];
  const selectedTab = ref('Camp');

  function changeTab(tabName: string) {
    selectedTab.value = tabName;
  }

  const photos = ref<IPhoto[] | null>(null);

  async function loadPhotos(categoryName: TPhotoCategory) {
    try {
      photos.value = await fetchPhotosByCategory(categoryName);
    } catch (error) {
      //TODO: add alert
      console.log(error);
    }
  }

  const exampleTabImage = computed(() => {
    if (photos.value?.length) {
      switch (selectedTab.value) {
        case 'Camp':
          return photos.value[0];
        case 'Summer':
          return photos.value[1];
        case 'Winter':
          return photos.value[2];
        case 'Fall':
          return photos.value[3];
        case 'Spring':
          return photos.value[4];

        default:
          break;
      }
      return photos.value[0];
    }

    return null;
  });

  onMounted(() => {
    loadPhotos('general');
  });
</script>

<style scoped lang="scss">
  .gallery-page {

  }

  img {
    width: 100%;
  }
</style>
