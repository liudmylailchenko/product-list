import { useParams } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { useAppDispatch, useAppSelector } from '../utils/hooks';
import * as Styled from './Products.styled';
import { useEffect } from 'react';
import { getReviewsByProductId, IProduct } from '../store/productsSlice';
import { Reviews } from './Reviews';

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
  }, [dispatch]);

  return (
    <Container>
      <Styled.ProductDetailsWrapper elevation={3}>
        {selectedProduct && (
          <>
            <Styled.ProductInfoContainer>
              <img
                alt="Contemplative Reptile"
                title={selectedProduct.img}
                src={`http://placehold.it/550x400?text=${selectedProduct.img}`}
              />
              <div>
                <Styled.Title>{selectedProduct.title}</Styled.Title>
                <Styled.Description>{selectedProduct.text}</Styled.Description>
              </div>
            </Styled.ProductInfoContainer>
            <Reviews reviews={products.reviews[numProductId]} />
          </>
        )}
      </Styled.ProductDetailsWrapper>
    </Container>
  );
};
