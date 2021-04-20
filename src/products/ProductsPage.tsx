import { IProduct } from '../store/productsSlice';
import { ProductItem } from './ProductItem';
import { useAppSelector } from '../utils/hooks';
import * as Styled from './Products.styled';

export const ProductsPage = () => {
  const products = useAppSelector((state) => state.products);

  return (
    <Styled.Wrapper>
      {products.list &&
        products.list.map((product: IProduct) => (
          <ProductItem key={product.id} product={product} />
        ))}
    </Styled.Wrapper>
  );
};
