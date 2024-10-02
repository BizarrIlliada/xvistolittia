export enum EPhotoAlbumName {
  GENERAL = 'general',
  HOME = 'home',
  CAMP = 'camp',
}

export interface IPhoto {
  url: string;
  name: string;
  createdAt?: Date;
}
