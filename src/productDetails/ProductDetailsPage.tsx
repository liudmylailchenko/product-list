import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  Paper,
  Backdrop,
  CircularProgress,
} from '@material-ui/core';
import styled from 'styled-components/macro';
import { useAppDispatch, useAppSelector } from '../utils/hooks';
import { getReviewsByProductId, IProduct } from '../store/productsSlice';
import { Reviews } from './Reviews';
import { Header } from '../components/Header';

const Wrapper = styled.div`
  margin-bottom: 30px;
`;

const ProductDetailsWrapper = styled(Paper)`
  padding: 20px;
`;

const ProductInfoContainer = styled(Paper)`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 20px;
  padding: 20px;
  background-color: #f5f5f5;
`;

const ImageContainer = styled.div`
  height: 300px;

  img {
    height: 100%;
    width: auto;
  }
`;

export const ProductDetailsPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const numProductId = +productId;
  const dispatch = useAppDispatch();

  const products = useAppSelector((state) => state.products);
  const selectedProduct = products.list.find(
    (product: IProduct) => product.id === numProductId,
  );

  useEffect(() => {
    dispatch(getReviewsByProductId(numProductId));
  }, [dispatch, numProductId]);

  return (
    <Wrapper>
      <Backdrop style={{ zIndex: 10000000 }} open={products.loading}>
        <CircularProgress color="primary" />
      </Backdrop>
      <Header />
      <Container maxWidth="md">
        <ProductDetailsWrapper elevation={3}>
          {selectedProduct && (
            <>
              <ProductInfoContainer>
                <ImageContainer>
                  {' '}
                  <img
                    alt="Contemplative Reptile"
                    title={selectedProduct.img}
                    src={`http://placehold.it/500x400?text=${selectedProduct.img}`}
                  />
                </ImageContainer>
                <div>
                  <Typography variant="h3" gutterBottom>
                    {selectedProduct.title}
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    {selectedProduct.text}
                  </Typography>
                </div>
              </ProductInfoContainer>
              <Reviews
                reviews={products.reviews[numProductId]}
                productId={numProductId}
              />
            </>
          )}
        </ProductDetailsWrapper>
      </Container>
    </Wrapper>
  );
};
