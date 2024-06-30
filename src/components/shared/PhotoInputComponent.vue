<template>
  <div class="photo-input df df--col df--aic">
    <div class="photo-input__body df df--aic df--jcc" @click="uploadPhotoInput?.click()">
      <i class="pi photo-input__icon" :class="{
      'pi-upload': !isUploading,
      'pi-spinner-dotted': isUploading,
      'photo-input__icon--loader': isUploading,
    }"></i>
      <input id="upload-photo-input" type="file" accept="image/*" class="photo-input__input" ref="uploadPhotoInput"
        :disabled="isUploading" @change.prevent="handleUploadPhoto" />
    </div>

    <label for="upload-photo-input" class="photo-input__label">
      {{ $t('shared.uploadYourPhoto') }}
    </label>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';

  import { usePhotosApi } from '@/api/photos.api';

  import { type TPhotoAlbumName } from '@/types';

  const { uploadPhotoToAlbum } = usePhotosApi();

  interface Props {
    albumName?: TPhotoAlbumName;
  }

  const props = withDefaults(defineProps<Props>(), {
    albumName: 'general',
  });

  const emits = defineEmits(['onPhotoAdded']);

  const isUploading = ref(false);
  const uploadPhotoInput = ref<HTMLInputElement | null>(null);

  async function handleUploadPhoto(event: Event) {
    const target = event.target as HTMLInputElement;
    const photo = target.files?.[0];

    console.log('Photo: ', photo);

    if (!photo) {
      return;
    }

    isUploading.value = true;

    try {
      await uploadPhotoToAlbum(photo, props.albumName);
      emits('onPhotoAdded');
    } catch (error) {
      //TODO: add alert
      console.log('Error', error);
    } finally {
      isUploading.value = false;
    }
  }
</script>

<style scoped lang="scss">
  @import '@/assets/styles/utils/_animations.scss';

  .photo-input {
    gap: 24px;
    width: min-content;
    white-space: nowrap;

    &__body {
      height: 80px;
      width: 80px;
      border: 2px dashed $green-900;
      cursor: pointer;
    }

    &__icon {
      color: $green-900;
      font-size: 24px;

      &--loader {
        animation: rotating 1s ease infinite;
      }
    }

    &__label {
      text-transform: uppercase;
      cursor: pointer;
    }

    &__input {
      display: none;
    }
  }
</style>
