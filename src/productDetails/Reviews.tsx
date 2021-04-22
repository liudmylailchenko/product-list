import { useCallback } from 'react';
import { useAppDispatch } from '../utils/hooks';
import {
  getReviewsByProductId,
  IReview,
  postReviewByProductId,
} from '../store/productsSlice';
import { ReviewItem } from './ReviewItem';
import { AddReviewForm } from './AddReviewForm';
import { isAuthorized } from '../utils/helpers';
import { Hint } from '../components/Hint';

type TProps = {
  reviews: Array<IReview>;
  productId: number;
};

export const Reviews = ({ reviews, productId }: TProps) => {
  const dispatch = useAppDispatch();

  const handleAddReview = useCallback(
    (payload) => {
      dispatch(postReviewByProductId(payload)).then(() => {
        dispatch(getReviewsByProductId(productId));
      });
    },
    [dispatch],
  );

  return (
    <div>
      {isAuthorized() ? (
        <AddReviewForm
          onSubmit={(review) => handleAddReview({ productId, review })}
        />
      ) : (
        <Hint message="To leave feedback please login or sign up." />
      )}

      {reviews &&
        [...reviews]
          .reverse()
          .map((review) => <ReviewItem key={review.id} review={review} />)}
    </div>
  );
};
