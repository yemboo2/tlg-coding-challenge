'use client';

import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

import { getAnimals, setAnimals } from '@/helpers/local-storage-helper';
import { IAnimal, IAnimalData } from '@/interfaces/animals';
import { AddTemplate } from '@/components';

const Add = () => {
  const [animalOptions, setAnimalOptions] = useState<IAnimalData[]>([]);
  const { back } = useRouter();

  const submit = useCallback(
    (animal: IAnimal) => {
      const userAnimals = getAnimals();
      setAnimals([...(userAnimals || []), animal]);
      back();
    },
    [back]
  );

  const search = useCallback(
    (searchTerm: string) => {
      axios
        .get(`https://api.api-ninjas.com/v1/animals?name=${searchTerm}`, {
          headers: { 'x-api-key': 'qoi1uaKc02k+TIZGqBm7vg==UVF6Ze6Yll3lwqnM' },
        })
        .then((response) => {
          setAnimalOptions(response.data);
        })
        .catch((error) => {
          console.log(error); // FIXME: error handling
        });
    },
    [setAnimalOptions]
  );

  return <AddTemplate submit={submit} animalOptions={animalOptions} search={search} goBack={() => back()} />;
};

export default Add;
