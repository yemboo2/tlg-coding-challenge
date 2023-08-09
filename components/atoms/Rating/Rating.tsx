import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

import { TRating } from '@/interfaces/animals';

interface IRatingProps {
  rating: TRating;
  changeRating?: (rating: TRating) => void;
}

const Rating = ({ rating, changeRating }: IRatingProps) => (
  <div className="flex">
    {Array.from({ length: 5 }, (_, index) => (
      <div
        key={`rating-${index}`}
        className={`${changeRating ? 'hover:cursor-pointer' : ''}`}
        onClick={() => {
          if (changeRating) changeRating((index + 1) as TRating);
        }}
      >
        {index + 1 <= rating ? <AiFillStar /> : <AiOutlineStar />}
      </div>
    ))}
  </div>
);

export default Rating;
