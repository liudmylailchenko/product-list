import { Paper, Typography } from '@material-ui/core';
import styled from 'styled-components/macro';

type TProps = {
  message: string;
};

const Wrapper = styled(Paper)`
  padding: 20px;
  margin-bottom: 30px;
  background-color: #f5f5f5;
`;

export const Hint = ({ message }: TProps) => {
  return (
    <Wrapper>
      <Typography variant="subtitle1">{message}</Typography>
    </Wrapper>
  );
};
