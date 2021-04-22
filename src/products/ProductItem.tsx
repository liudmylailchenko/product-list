import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import styled from 'styled-components/macro';
import { IProduct } from '../store/productsSlice';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

const ProductContainer = styled(Card)`
  max-width: 300px;
`;

type TProps = {
  product: IProduct;
};

export const ProductItem = ({ product }: TProps) => {
  return (
    <ProductContainer>
      <CardActionArea component={Link} to={ROUTES.PRODUCT_DETAILS(product.id)}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          title={product.img}
          image={`https://placehold.co/300x200?text=${product.img}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </ProductContainer>
  );
};
