import { IReview } from '../store/productsSlice';
import { ReviewItem } from './ReviewItem';

type TProps = {
  reviews: Array<IReview>;
};

export const Reviews = ({ reviews }: TProps) => {
  return (
    <div>
      {reviews &&
        reviews.map((review) => <ReviewItem key={review.id} review={review} />)}
    </div>
  );
};
