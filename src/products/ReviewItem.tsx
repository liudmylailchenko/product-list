import { Avatar } from '@material-ui/core';
import { IReview } from '../store/productsSlice';

type TProps = {
  review: IReview;
};

export const ReviewItem = ({ review }: TProps) => {
  return (
    <div>
      <Avatar>{review.created_by.username[0]}</Avatar>
    </div>
  );
};
