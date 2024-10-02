<template>
  <div v-if="photo !== null" class="photo-view-backdrop" @click="closePhoto">
    <PhotoContainerComponent :photo="photo" class="photo-view"/>
  </div>
</template>

<script setup lang="ts">
import PhotoContainerComponent from './PhotoContainerComponent.vue';
import type { IPhoto } from '@/types';

interface Props {
  photo: IPhoto | null,
}

const props = withDefaults(defineProps<Props>(), {

});

const emits = defineEmits(['onPhotoClose']);

function closePhoto() {
  emits('onPhotoClose');
}
</script>

<style scoped lang="scss">
.photo-view-backdrop {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: #0003;
}

.photo-view {
  height: 80vh;
  max-width: 80vw
}
</style>
