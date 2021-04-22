import { Container, Typography } from '@material-ui/core';
import styled from 'styled-components/macro';
import { IProduct } from '../store/productsSlice';
import { ProductItem } from './ProductItem';
import { useAppSelector } from '../utils/hooks';
import { Header } from '../components/Header';

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  padding: 30px;
`;

export const ProductsPage = () => {
  const products = useAppSelector((state) => state.products);

  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Typography variant="h2" align="center">
          Products
        </Typography>
        <ProductsContainer>
          {products.list &&
            products.list.map((product: IProduct) => (
              <ProductItem key={product.id} product={product} />
            ))}
        </ProductsContainer>
      </Container>
    </>
  );
};
