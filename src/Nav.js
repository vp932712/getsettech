import React, { Component } from 'react'
import { Menu, Segment, Sticky } from 'semantic-ui-react'

export default class Nav extends Component {
  state = { activeItem: 'home' }

   handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  handleContextRef = contextRef => this.setState({ contextRef })
  render() {
    const { activeItem } = this.state
    const { contextRef } = this.state
    return (
      <Sticky context={contextRef}>
      <Segment inverted>
        <Menu inverted pointing secondary fluid widths={4}>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            name="IT Services"
            active={activeItem === 'IT Services'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='About'
            active={activeItem === 'About'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='contact'
            active={activeItem === 'contact'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
      </Sticky>
    )
  }
}
