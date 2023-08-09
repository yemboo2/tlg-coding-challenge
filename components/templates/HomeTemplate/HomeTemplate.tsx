'use client';

import { useState } from 'react';

import { IAnimal } from '@/interfaces/animals';

import { Button } from '../../atoms';
import { AnimalList, AnimalDetailView } from '../../molecules';

interface IHomeTemplateProps {
  animals: IAnimal[];
  startCreating: () => void;
}

const HomeTemplate = ({ animals, startCreating }: IHomeTemplateProps) => {
  const [selectedAnimal, setSelectedAnimal] = useState<IAnimal | null>(animals?.[0]);

  return (
    <div className="flex-row justify-center items-center content-center mt-8 md:mt-20">
      <p className="text-gray-200 text-5xl text-center pb-4">Your Wildlife Collection</p>

      {animals.length === 0 && (
        <div className="flex flex-col justify-center items-center content-center">
          <p className="flex text-gray-200">Start by adding your first animals</p>
          <Button onClick={startCreating} label="Create" />
        </div>
      )}
      {animals.length > 0 && (
        <div className="flex-row md:flex justify-center items-start m-5">
          <div className="flex flex-col justify-center items-center m-5">
            <div className="border-2 rounded">
              <AnimalList animals={animals} selectAnimal={setSelectedAnimal} />
            </div>
            <Button onClick={startCreating} label="Add more" />
          </div>
          <div className="m-5">{selectedAnimal && <AnimalDetailView animal={selectedAnimal} />}</div>
        </div>
      )}
    </div>
  );
};

export default HomeTemplate;
