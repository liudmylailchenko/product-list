import { useCallback } from 'react';
import { AuthForm } from './AuthForm';
import * as Styled from './Auth.styled';
import { authorize } from '../store/authSlice';
import { useAppDispatch } from '../utils/hooks';

export const RegisterPage = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = useCallback(
    (values) => {
      dispatch(authorize({ type: 'register', values }));
    },
    [dispatch],
  );

  return (
    <Styled.Wrapper>
      <Styled.PageTitle>Sign Up</Styled.PageTitle>
      <AuthForm buttonTitle="Sign Up" onSubmit={handleSubmit} />
    </Styled.Wrapper>
  );
};
