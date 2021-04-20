import { Button, Typography } from '@material-ui/core';
import * as Styled from './Header.styled';

export const Header = () => {
  return (
    <Styled.HeaderContainer position="static">
      <Styled.ToolContainer>
        <Typography variant="h6">Products</Typography>
        <Button color="inherit">Login</Button>
      </Styled.ToolContainer>
    </Styled.HeaderContainer>
  );
};
