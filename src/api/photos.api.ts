import { getDownloadURL, ref as storageRef, uploadBytes } from 'firebase/storage';
import { collection, query, where, getDocs, addDoc } from 'firebase/firestore';
import { fireStore, fireStorage } from '@/firebase';

import { type IPhoto, type TPhotoCategory } from '@/types';

//TODO: add cashing

export async function fetchPhotosByCategory(categoryName: TPhotoCategory): Promise<IPhoto[]> {
  try {
    const q = query(
      collection(fireStore, 'photos'),
      where('category', '==', categoryName),
    );

    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map(doc => ({
      ...doc.data(),
      createdAt: doc.data().createdAt.toDate(),
    })) as IPhoto[];
  } catch (error) {
    return Promise.reject(error)
  }
}

export async function uploadPhoto(photo: File, collectionName: TPhotoCategory): Promise<void> {
  const storageReference = storageRef(fireStorage, `photos/${collectionName}/${photo.name}`);
  await uploadBytes(storageReference, photo);
  const url = await getDownloadURL(storageReference);

  const photoCollection = collection(fireStore, 'photos');
  await addDoc(photoCollection, {
    url: url,
    name: photo.name,
    category: collectionName,
    createdAt: new Date(),
  });
}
