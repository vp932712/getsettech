import React, { Component } from 'react'
import { Menu, Segment, Sticky } from 'semantic-ui-react'
import { Link, NavLink } from "react-router-dom"

export default class Nav extends Component {
  state = { activeItem: 'Home' }

   handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleContextRef = contextRef => this.setState({ contextRef })
  render() {
    const { activeItem } = this.state
    const { contextRef } = this.state
    return (
      <Sticky context={contextRef}>
      <Segment inverted>
        <Menu inverted pointing secondary fluid widths={4}>
          <Menu.Item
          as={NavLink} exact to='/'
          name='Home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
          />

          <Menu.Item
             as={NavLink} exact to='/itServices'
            name="IT Services"
            active={activeItem === 'IT Services'}
            onClick={this.handleItemClick}
          />  
          <Menu.Item
          as={NavLink} exact to='/about'
            name='About'
            active={activeItem === 'About'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
          as={NavLink} exact to='/contact'
            name='Contact'
            active={activeItem === 'Contact'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
      </Sticky>
    )
  }
}
