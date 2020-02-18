import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default class NavMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
        {this.props.user? 
            <>
                <Menu.Item
                    as={Link}
                    to='/feedinglog'
                    name='feeding log'
                    active={activeItem === 'feeding log'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='new feeding'
                    active={activeItem === 'new feeding'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='notes'
                    active={activeItem === 'notes'}
                    onClick={this.handleItemClick}
                />
            </>
        :
            <Menu.Item>
                Feeding Tracker
            </Menu.Item>
        }
          <Menu.Menu position='right'>
            {this.props.user ? 
                <Menu.Item
                name='logout'
                active={activeItem === 'logout'}
                onClick={this.props.signOut}
                />
            :
                <Menu.Item
                name='login'
                active={activeItem === 'login'}
                onClick={this.props.signIn}
                />
            }
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
