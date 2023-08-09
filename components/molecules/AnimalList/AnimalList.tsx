import { IAnimal } from '@/interfaces/animals';

import { Rating } from '../../atoms';

interface IAnimalListProps {
  animals: IAnimal[];
  selectAnimal: (animal: IAnimal) => void;
}

const AnimalList = ({ animals, selectAnimal }: IAnimalListProps) => {
  const renderAnimal = (animal: IAnimal) => (
    <div key={animal.name} className="flex m-2 hover:cursor-pointer" onClick={() => selectAnimal(animal)}>
      <p className="text-gray-200 pr-2">{animal.name}</p>
      <Rating rating={animal.rating} />
    </div>
  );

  return <div>{animals.map(renderAnimal)}</div>;
};

export default AnimalList;
