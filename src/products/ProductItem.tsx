import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import { IProduct } from '../store/productsSlice';
import * as Styled from './Products.styled';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

type TProps = {
  product: IProduct;
};

export const ProductItem = ({ product }: TProps) => {
  return (
    <Styled.ProductContainer>
      <CardActionArea component={Link} to={ROUTES.PRODUCT_DETAILS(product.id)}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          title={product.img}
          image={`http://placehold.it/300x200?text=${product.img}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Styled.ProductContainer>
  );
};
