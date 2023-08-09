import { IAnimal } from '@/interfaces/animals';

const ANIMALS_KEY = 'tlg_animals';
export const getAnimals = (): IAnimal[] => {
  const animals = localStorage.getItem(ANIMALS_KEY);
  return animals ? JSON.parse(animals) : [];
};
export const setAnimals = (animals: IAnimal[]) => localStorage.setItem(ANIMALS_KEY, JSON.stringify(animals));
