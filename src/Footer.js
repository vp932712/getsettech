import React, { Component } from 'react';
import _ from 'lodash'
import { Container, Divider, Dropdown, Grid, Header, Icon, Image, List, Menu, Segment, Visibility } from 'semantic-ui-react'
import { SocialIcon } from 'react-social-icons';



class Footer extends Component {
  render() {
    return (
      <Segment
        inverted
        style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
        vertical
      >
      <Container textAlign='center'>
        <List horizontal inverted divided link>
          <List.Item as='a' >{<SocialIcon url="https://www.facebook.com/officialgetsettech/" />}</List.Item>
          <List.Item as='a' >{<SocialIcon url="http://www.getsettech.com" />}</List.Item>
          <List.Item as='a' >{<SocialIcon url="https://www.google.com/" />}</List.Item>
          <List.Item as='a' >{<SocialIcon url="https://twitter.com/" />}</List.Item>
        </List>
      </Container>
        <Container textAlign='center'>
          <List horizontal inverted divided link>
            <List.Item as='a' >Site Map</List.Item>
            <List.Item as='a' >Contact Us</List.Item>
            <List.Item as='a' >Terms and Conditions</List.Item>
            <List.Item as='a' >Privacy Policy</List.Item>
          </List>
          <p>Made with ❤️ by Vic Patel for KanuBhai</p>
        </Container>



      </Segment>

    );
  }
}

export default Footer;
