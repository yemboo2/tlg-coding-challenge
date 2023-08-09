'use client';

import { useCallback, useState } from 'react';

import { IAnimal, IAnimalData } from '@/interfaces/animals';
import { AnimalDetailView } from '../../molecules';
import { DebouncedInput } from '../../atoms';

interface IAddTemplateProps {
  animalOptions: IAnimalData[];
  submit: (animal: IAnimal) => void;
  search: (searchTerm: string) => void;
  goBack: () => void;
}

const AddTemplate = ({ animalOptions, submit, search, goBack }: IAddTemplateProps) => {
  const [selectedAnimal, setSelectedAnimal] = useState<IAnimal | null>(null);

  const chooseAnimal = useCallback(
    (animal: IAnimalData) => {
      const newAnimal: IAnimal = {
        name: animal.name,
        rating: 1,
        features: {},
      };
      for (let [key, value] of Object.entries(animal.characteristics)) {
        const newKey = `${key.replaceAll('_', ' ')}: ${value}`;
        newAnimal.features[newKey] = false;
      }
      setSelectedAnimal(newAnimal);
    },
    [setSelectedAnimal]
  );

  return (
    <div className="flex flex-col justify-center items-center mt-10 md:mt-20">
      <button className="md:hidden absolute top-3 left-3 text-white hover:cursor-pointer" onClick={goBack}>
        {'<'}
      </button>
      <button className="sm:hidden md:block absolute top-3 left-3 text-white hover:cursor-pointer" onClick={goBack}>
        {'< Back'}
      </button>

      <div className="text-gray-200 text-5xl text-center mb-4 md:mb-8">Add an animal</div>

      <div className="ml-5">
        <DebouncedInput searchFunc={search} />
        {animalOptions.length > 0 && (
          <div>
            {animalOptions.map((animal) => (
              <div key={animal.name} onClick={() => chooseAnimal(animal)} className="text-gray-200">
                {animal.name}
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedAnimal && (
        <div className="m-5">
          {selectedAnimal && <AnimalDetailView animal={selectedAnimal} submit={submit} editable />}
        </div>
      )}
    </div>
  );
};

export default AddTemplate;
