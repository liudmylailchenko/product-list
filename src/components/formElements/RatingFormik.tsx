import { Rating, RatingProps } from '@material-ui/lab';
import { FieldProps } from 'formik';
import React, { useCallback } from 'react';

type TProps = FieldProps & RatingProps;

/**
 * Formik wrapper over MUI Rating
 */
export const RatingFormik = ({
  field,
  form: { setFieldValue },
  ...otherProps
}: TProps) => {
  const handleChange = useCallback(
    (e, value) => {
      setFieldValue(field.name, parseInt(value));
    },
    [setFieldValue, field.name],
  );

  return <Rating onChange={handleChange} value={field.value} {...otherProps} />;
};
