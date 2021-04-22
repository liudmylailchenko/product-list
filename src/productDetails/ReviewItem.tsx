import styled from 'styled-components/macro';
import { Typography, Avatar, Paper } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { IReview } from '../store/productsSlice';
import { formatDates } from '../utils/helpers';

const ReviewContainer = styled(Paper)`
  display: grid;
  margin-bottom: 15px;
  padding: 5px 20px;
  background-color: #f5f5f5;
  grid-template-columns: 50px auto auto auto;
  grid-template-rows: auto;
  grid-template-areas:
    'avatar username  . rate'
    'avatar date date date'
    'avatar review review review';

  .avatar {
    grid-area: avatar;
    align-self: center;
  }
  .username {
    grid-area: username;
  }
  .rate {
    grid-area: rate;
    justify-self: end;
  }
  .date {
    grid-area: date;
  }
  .review {
    grid-area: review;
  }
`;

type TProps = {
  review: IReview;
};

export const ReviewItem = ({ review }: TProps) => {
  return (
    <ReviewContainer>
      <Avatar className="avatar">{review.created_by.username[0]}</Avatar>
      <Typography className="username" variant="subtitle1">
        {review.created_by.username}
      </Typography>
      <Rating className="rate" value={review.rate} readOnly />
      <Typography className="date" variant="caption">
        {formatDates(review.created_at)}
      </Typography>
      <Typography className="review" variant="body1">
        {review.text}
      </Typography>
    </ReviewContainer>
  );
};
