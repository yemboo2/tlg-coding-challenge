import { IAnimal, TRating } from '@/interfaces/animals';
import { Rating } from '../../atoms';
import { useEffect, useState } from 'react';

interface IAnimalDetailViewProps {
  animal: IAnimal;
  editable?: boolean;
  submit?: (animal: IAnimal) => void;
}

const AnimalDetailView = ({ animal, editable, submit }: IAnimalDetailViewProps) => {
  const [myAnimal, setMyAnimal] = useState<IAnimal>(animal);

  const changeRating = (rating: TRating) => {
    if (editable) setMyAnimal((prev) => ({ ...prev, rating }));
  };

  const toggleFeature = (feature: string) => {
    if (editable)
      setMyAnimal((prev) => ({ ...prev, features: { ...prev.features, [feature]: !prev.features[feature] } }));
  };

  useEffect(() => {
    setMyAnimal(animal);
  }, [animal]);

  return (
    <div className="flex-row just">
      <div className="flex mb-2">
        <p className="text-gray-200 pr-2">{animal.name}</p>
        <Rating rating={myAnimal.rating} changeRating={changeRating} />
      </div>
      <div className="flex-row">
        {Object.entries(myAnimal.features)
          .filter((feature) => editable || feature[1])
          .map((feature) => (
            <div
              className={`${editable ? 'hover:cursor-pointer' : ''}`}
              key={`${feature[0]}`}
              onClick={() => toggleFeature(feature[0])}
            >
              <input type="checkbox" checked={feature[1]} name={`${feature[0]}`} className="mr-2 pointer-events-none" />
              <label htmlFor={`${feature[0]}`} className="capitalize pointer-events-none">
                {feature[0]}
              </label>
            </div>
          ))}
      </div>
      {editable && submit && (
        <button
          onClick={() => submit(myAnimal)}
          className="m-2 border-2 rounded bg-slate-500 px-1 hover:cursor-pointer"
        >
          + Add
        </button>
      )}
    </div>
  );
};

export default AnimalDetailView;
