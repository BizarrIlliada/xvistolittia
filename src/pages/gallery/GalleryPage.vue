<template>
  <div class="gallery-page">
    <TabsComponent :tabs="tabs" :selectedTab="selectedTab" @onTabSelect="changeTab($event)">
      <component :is="currentTabComponent" v-bind="currentTabProps" @onPhotoAdded="loadPhotos('camp')"></component>
    </TabsComponent>
  </div>
</template>


<script setup lang="ts">
  //TODO: create gallery with different albums and carousel

  import { computed, onMounted, ref } from 'vue';

  import GalleryComponent from './GalleryComponent.vue';
  import PhotoInputComponent from '@/components/shared/PhotoInputComponent.vue';
  import TabsComponent from '@/components/shared/TabsComponent.vue';

  import { type IPhoto, type TPhotoCategory } from '@/types';

  import { useAuthStore } from '@/stores/authStore';
  import { usePhotosApi } from '@/api/photos.api';

  const authStore = useAuthStore();
  const { fetchPhotosByCategory } = usePhotosApi();

  const tabs = computed(() => authStore.user ? [ 'Camp', 'Add photo' ] : ['Camp']);
  const selectedTab = ref('Camp');

  const currentTabComponent = computed(() => {
    if (selectedTab.value === 'Camp') {
      return GalleryComponent;
    } else {
      return PhotoInputComponent;
    }
  });
  const currentTabProps = computed(() => {
    if (selectedTab.value === 'Camp') {
      return {
        photos: photos.value as IPhoto[],
      };
    } else {
      return {
        collectionName: 'camp' as TPhotoCategory,
      };
    }
  });

  function changeTab(tabName: string) {
    selectedTab.value = tabName;
  }

  const photos = ref<IPhoto[]>([]);

  async function loadPhotos(categoryName: TPhotoCategory) {
    try {
      photos.value = await fetchPhotosByCategory(categoryName);
    } catch (error) {
      //TODO: add alert
      console.log(error);
    }
  }

  onMounted(() => {
    loadPhotos('camp');
  });
</script>

<style scoped lang="scss">
  .gallery-page {

  }
</style>
