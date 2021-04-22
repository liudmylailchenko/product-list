import { Button, Typography, Toolbar, AppBar } from '@material-ui/core';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import { isAuthorized } from '../utils/helpers';
import { clearStorage } from '../utils/storage';

const ToolContainer = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const HeaderContainer = styled(AppBar)`
  margin-bottom: 30px;
`;

export const Header = () => {
  return (
    <HeaderContainer position="static">
      <ToolContainer>
        <Typography variant="h5">Products</Typography>
        {isAuthorized() ? (
          <Button
            color="inherit"
            onClick={() => {
              clearStorage();
              window.location.reload();
            }}
          >
            Log out
          </Button>
        ) : (
          <div>
            <Button component={Link} to={ROUTES.REGISTER} color="inherit">
              Sign Up
            </Button>
            <Button color="inherit" component={Link} to={ROUTES.LOGIN}>
              Sign In
            </Button>
          </div>
        )}
      </ToolContainer>
    </HeaderContainer>
  );
};
