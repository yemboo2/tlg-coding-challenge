export type TRating = 1 | 2 | 3 | 4 | 5;

export interface IAnimal {
  name: string;
  rating: TRating;
  features: { [key: string]: boolean };
}

export interface IAnimalData {
  name: string;
  characteristics: { [key: string]: string };
}
