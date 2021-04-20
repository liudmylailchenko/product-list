import { useCallback } from 'react';
import { authorize } from '../store/authSlice';
import { useAppDispatch } from '../utils/hooks';
import * as Styled from './Auth.styled';
import { AuthForm } from './AuthForm';

export const LoginPage = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = useCallback(
    (values) => {
      dispatch(authorize({ type: 'login', values }));
    },
    [dispatch],
  );

  return (
    <Styled.Wrapper>
      <Styled.PageTitle>Sign In</Styled.PageTitle>
      <AuthForm buttonTitle="Sign In" onSubmit={handleSubmit} />
    </Styled.Wrapper>
  );
};
