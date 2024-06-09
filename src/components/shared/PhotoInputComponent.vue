<template>
  <div>
    <input type="file" @change="uploadPhoto" />
  </div>
</template>

<script setup lang="ts">
  import { ref as storageRef, uploadBytes, getDownloadURL } from "firebase/storage";
  import { collection, addDoc } from "firebase/firestore";
  import { fireStorage, fireStore } from '@/firebase';

  const uploadPhoto = async (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
    if (!file) return;

    try {
      const storageReference = storageRef(fireStorage, `photos/${file.name}`);
      await uploadBytes(storageReference, file);
      const url = await getDownloadURL(storageReference);

      console.log(fireStore);

      const docRef = await addDoc(collection(fireStore, 'photos'), {
        url: url,
        name: file.name,
        createdAt: new Date(),
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.log('Error', error);
    }
};
</script>
