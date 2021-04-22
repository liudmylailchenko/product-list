import * as yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { Button } from '@material-ui/core';
import styled from 'styled-components/macro';
import { TextFieldFormik } from '../components/formElements/TextFieldFormik';
import { IReview } from '../store/productsSlice';
import { RatingFormik } from '../components/formElements/RatingFormik';
import { isAuthorized } from '../utils/helpers';

type TProps = {
  onSubmit: (review: Partial<IReview>) => void;
};

const FieldsContainer = styled.div`
  margin-bottom: 30px;
  display: grid;
  grid-gap: 10px;
  grid-template-areas:
    'review review'
    'rate button';

  .rate {
    grid-area: rate;
    align-self: start;
  }
  .button {
    grid-area: button;
    justify-self: end;
  }
  .review {
    grid-area: review;
  }
`;

export const AddReviewForm = ({ onSubmit }: TProps) => {
  const initialValues: Partial<IReview> = { rate: 0, text: '' };

  const validationSchema = yup.object().shape({
    text: yup.string().required('You have to write something!'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(review, actions) => {
        onSubmit(review);
        actions.resetForm();
      }}
      validationSchema={validationSchema}
    >
      <Form>
        <FieldsContainer>
          <Field
            className="review"
            label="Add review"
            name="text"
            multiline
            fullWidth
            rows={2}
            variant="outlined"
            component={TextFieldFormik}
            disabled={!isAuthorized()}
          />
          <Field
            name="rate"
            className="rate"
            component={RatingFormik}
            disabled={!isAuthorized()}
          />
          <Button
            className="button"
            type="submit"
            variant="contained"
            color="primary"
            disabled={!isAuthorized()}
          >
            Add
          </Button>
        </FieldsContainer>
      </Form>
    </Formik>
  );
};
