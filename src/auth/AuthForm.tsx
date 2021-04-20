import * as yup from 'yup';
import styled from 'styled-components/macro';
import { Field, Form, Formik } from 'formik';
import { Button } from '@material-ui/core';
import { TextFieldFormik } from '../components/formElements/TextFieldFormik';
import { IAuthFormValues } from '../store/authSlice';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 150px;
  width: 300px;

  .MuiFormControl-root {
    margin-bottom: 20px;
  }
`;

type TProps = {
  onSubmit: (values: IAuthFormValues) => void;
  buttonTitle: string;
};

export const AuthForm = ({ onSubmit, buttonTitle }: TProps) => {
  const initialValues: IAuthFormValues = { username: '', password: '' };

  const validationSchema = yup.object().shape({
    username: yup.string().required('Username is required!'),
    password: yup.string().required('Password is required!'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <FormContainer>
          <Field
            name="username"
            component={TextFieldFormik}
            label="Username"
            variant="outlined"
            fullWidth
          />
          <Field
            name="password"
            component={TextFieldFormik}
            label="Password"
            variant="outlined"
            type="password"
            fullWidth
          />
          <Button
            color="primary"
            variant="contained"
            size="large"
            type="submit"
            fullWidth
          >
            {buttonTitle}
          </Button>
        </FormContainer>
      </Form>
    </Formik>
  );
};
