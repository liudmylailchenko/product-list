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

  // Add review and get reviews list because post review API do not response any review info
  const handleAddReview = useCallback(
    (payload) => {
      dispatch(postReviewByProductId(payload)).then(() => {
        dispatch(getReviewsByProductId(productId));
      });
    },
    [dispatch, productId],
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
          .reverse() // reverse the array to display new reviews first
          .map((review) => <ReviewItem key={review.id} review={review} />)}
    </div>
  );
};
