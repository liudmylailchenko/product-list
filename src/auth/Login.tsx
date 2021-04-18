import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authorize } from '../store/authSlice';
import * as Styled from './Auth.styled';
import { AuthForm } from './AuthForm';

export const Login = () => {
  const dispatch = useDispatch();

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
