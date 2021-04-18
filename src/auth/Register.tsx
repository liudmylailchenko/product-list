import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { AuthForm } from './AuthForm';
import * as Styled from './Auth.styled';
import { authorize } from '../store/authSlice';

export const Register = () => {
  const dispatch = useDispatch();

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
