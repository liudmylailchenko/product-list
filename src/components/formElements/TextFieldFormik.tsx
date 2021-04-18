import React from 'react';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import { FieldProps } from 'formik';

type TProps = FieldProps & TextFieldProps;

/**
 * Formik wrapper over MUI TextField
 */
export const TextFieldFormik = ({
  field,
  form,
  helperText,
  ...otherProps
}: TProps) => {
  return (
    <TextField
      error={!!form.touched[field.name] && !!form.errors[field.name]}
      helperText={
        form.touched[field.name] && form.errors[field.name]
          ? form.errors[field.name]
          : helperText
      }
      {...field}
      {...otherProps}
      fullWidth
    />
  );
};
