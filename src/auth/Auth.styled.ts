import styled from 'styled-components/macro';
import { Container, Typography } from '@material-ui/core';

// Styles for login and register pages
export const Wrapper = styled(Container)`
  display: flex;
  margin-top: 200px;
  align-items: center;
  flex-direction: column;
`;

export const PageTitle = styled(Typography).attrs({
  variant: 'h3',
  gutterBottom: true,
})``;
