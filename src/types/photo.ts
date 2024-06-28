export type TPhotoCategory = 'general' | 'home' | 'camp';

export interface IPhoto {
  url: string;
  name: string;
  category?: TPhotoCategory;
  createdAt?: Date;
}
