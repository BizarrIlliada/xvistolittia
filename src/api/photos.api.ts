import { getDownloadURL, ref as storageRef, uploadBytes } from 'firebase/storage';
import { collection, query, getDocs, addDoc, orderBy } from 'firebase/firestore';
import { fireStore, fireStorage } from '@/firebase';

import { type IPhoto, type TPhotoAlbumName } from '@/types';

//TODO: add cashing

export function usePhotosApi() {
  async function fetchAlbumByName(albumName: TPhotoAlbumName): Promise<IPhoto[]> {
    try {
      const albumRef = collection(fireStore, 'photos', albumName, 'images');
      const q = query(albumRef, orderBy('createdAt', 'desc'));

      const querySnapshot = await getDocs(q);

      return querySnapshot.docs.map(doc => ({
        ...doc.data(),
        createdAt: doc.data().createdAt.toDate(),
      })) as IPhoto[];
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async function uploadPhotoToAlbum(photo: File, albumName: string) {
    const storageReference = storageRef(fireStorage, `photos/${albumName}/${photo.name}`);
    await uploadBytes(storageReference, photo);
    const url = await getDownloadURL(storageReference);

    const albumRef = collection(fireStore, 'photos', albumName, 'images');

    await addDoc(albumRef, {
      url: url,
      name: photo.name,
      createdAt: new Date(),
    });
  }

  return {
    fetchAlbumByName,
    uploadPhotoToAlbum,
  }
}
