export type TPhotoAlbumName = 'general' | 'home' | 'camp';

export interface IPhoto {
  url: string;
  name: string;
  createdAt?: Date;
}
