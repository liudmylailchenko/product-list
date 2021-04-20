import { Card, Container, Paper, Typography } from '@material-ui/core';
import styled from 'styled-components/macro';

export const ProductContainer = styled(Card)`
  max-width: 300px;
`;

export const Wrapper = styled(Container)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const ProductDetailsWrapper = styled(Paper)`
  padding: 20px;
`;

export const ProductInfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const Title = styled(Typography).attrs({
  variant: 'h3',
  gutterBottom: true,
})``;

export const Description = styled(Typography).attrs({
  variant: 'body1',
  gutterBottom: true,
})``;
