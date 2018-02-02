import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, Icon, Grid } from 'semantic-ui-react';
import SideBarNav from './SideBarNav'

const Layout = ({ children }) => {
  return (
    <div>
      <SideBarNav>
        <Container>
          {children}
          <Divider />
          <p>
            Made with <Icon name="heart" color="red" /> by Adrianna Valdivia
          </p>
        </Container>
      </SideBarNav>
    </div>
  );
};

export default Layout;
