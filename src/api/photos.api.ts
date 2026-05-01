import { getDownloadURL, ref as storageRef, uploadBytes } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { fireStore, fireStorage } from '@/firebase';

import { type IPhoto, type TPhotoAlbumName } from '@/types';

import homePhoto1 from '@/assets/images/photos/home/IMG_5247.jpg';
import homePhoto2 from '@/assets/images/photos/home/IMG_5248.jpg';
import homePhoto3 from '@/assets/images/photos/home/IMG_5250.jpg';

const localAlbums: Record<TPhotoAlbumName, IPhoto[]> = {
  home: [
    {
      url: homePhoto1,
      name: 'IMG_5247.jpg',
    },
    {
      url: homePhoto2,
      name: 'IMG_5248.jpg',
    },
    {
      url: homePhoto3,
      name: 'IMG_5250.jpg',
    },
  ],
  camp: [],
  general: [],
};

export function usePhotosApi() {
  async function fetchAlbumByName(albumName: TPhotoAlbumName): Promise<IPhoto[]> {
    return localAlbums[albumName];
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
