import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import Layout from './Layout';
import Footer from './Footer';
import AddTaskForm from '../container/AddTaskForm';
import VisibleTaskList from '../container/VisibleTaskList';

const Home = () => {
  return (
    <Layout>
      <Grid stackable columns={2}>
        <Grid.Row>
          <Grid.Column>
            <AddTaskForm />
            <VisibleTaskList />
            <Footer />
            <Link to="/dynamic">Navigate to Dynamic Page</Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Layout>
  );
};

export default Home;
