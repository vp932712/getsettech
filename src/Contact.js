import React, { Component } from 'react';
import { Form, Input, Button, Grid, Container, Header } from 'semantic-ui-react'

class Contact extends Component {
  render() {
    return (
      <div>
      <Container textAlign='justified'>

       <Header  textAlign='center'as='h1'>CONTACT US</Header>
       <Header  textAlign='center'as='h4'>GET IN TOUCH</Header>
      <Grid divided='vertically'>
    <Grid.Row columns={2}>
      <Grid.Column>
      <Form>
  <Form.Group unstackable widths={2}>
    <Form.Input label='First name' placeholder='First name' />
    <Form.Input label='Last name' placeholder='Last name' />
  </Form.Group>
  <Form.Group widths={2}>
    <Form.Input label='Address' placeholder='Address' />
    <Form.Input label='Phone' placeholder='Phone' />
  </Form.Group>
  <Form.Checkbox label='I agree to the Terms and Conditions' />
  <Button type='submit'>Submit</Button>
</Form>
      </Grid.Column>
      <Grid.Column>
      <Container textAlign="justified">If you would like to unleash the potential that technology can bring to your business, contact us.</Container>
      <Container textAlign='justified'> We’re ready to partner with you and deliver results. Let’s go!</Container>

      </Grid.Column>
    </Grid.Row>
    </Grid>
</Container>
      </div>
    );
  }
}

export default Contact;
