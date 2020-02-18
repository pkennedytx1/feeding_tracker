import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon, Button } from 'semantic-ui-react'

export default class NavMenu extends Component {
  state = { activeItem: 'feeding log' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    let userName

    if(this.props.user) {
      userName = this.props.user.displayName.split(' ')[0]
    }

    console.log(this.props.user)
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
                >
                  <Icon name='gulp' />Feeding Log
                </Menu.Item>
                <Menu.Item
                    as={Link}
                    to='/newfeeding'
                    name='new feeding'
                    active={activeItem === 'new feeding'}
                    onClick={this.handleItemClick}
                >
                  <Icon name='plus' />New Feeding
                </Menu.Item>
                <Menu.Item
                    as={Link}
                    to='/alldata'
                    name='alldata'
                    active={activeItem === 'alldata'}
                    onClick={this.handleItemClick}
                >
                  <Icon name='chart pie' />All Data
                </Menu.Item>
            </>
        :
            <Menu.Item>
                Feeding Tracker
            </Menu.Item>
        }
          <Menu.Menu position='right'>
            {this.props.user ? 
              <>
                <Menu.Item
                as={Link}
                to='/profile'
                name='profile'
                active={activeItem === 'profile'}
                onClick={this.handleItemClick}
                >
                  <Icon name='user circle'/>{` ${userName}'s Profile`}
                </Menu.Item>
                <Menu.Item
                name='logout'
                active={activeItem === 'logout'}
                onClick={this.props.signOut}
                >
                  <Icon name='sign-out'/>Sign-Out
                </Menu.Item>
              </>
            :
                <Menu.Item
                  onClick={this.props.signIn}
                >
                  <Button><Icon name='google' />Log-In</Button>
                </Menu.Item>
            }
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}
