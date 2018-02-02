import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Sidebar, Header, Button, Menu, Icon, Grid} from 'semantic-ui-react'

import {h1} from './layout.css';

class SideBarNav extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Button onClick={this.toggleVisibility}>
                <Icon name='align justify' size='large' />
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Link to="/">
                <Header as="h1" className={h1}>
                  Daily Task List
                </Header>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
            <Link to="/">
              <Menu.Item name='home'>
                <Icon name='home' />
                Home
              </Menu.Item>
            </Link>
            <Link to='/dynamic'>
              <Menu.Item name='question'>
                <Icon name='question' />
                About
              </Menu.Item>
            </Link>
          </Sidebar>
          <Sidebar.Pusher>
            {this.props.children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}

export default SideBarNav