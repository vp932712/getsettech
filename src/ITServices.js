import React, { Component } from 'react';
import { Form, Input, Button, Grid, Container, Header, Card, Icon } from 'semantic-ui-react'

class ITServices extends Component {
  render() {
    return (
      <div>
      <Container textAlign='justified'>

       <Header  textAlign='center'as='h1'>WHAT WE DO</Header>
       <Header  textAlign='center'as='h4'>HOW WE CAN SERVE YOU</Header>
       <Grid>
       <Grid.Row columns={3}>
     <Grid.Column>
       <Image src='/assets/images/wireframe/image.png' />
     </Grid.Column>
     <Grid.Column>
       <Image src='/assets/images/wireframe/image.png' />
     </Grid.Column>
     <Grid.Column>
       <Image src='/assets/images/wireframe/image.png' />
     </Grid.Column>
   </Grid.Row>
   <Grid.Row columns={3}>
 <Grid.Column>
   <Image src='/assets/images/wireframe/image.png' />
 </Grid.Column>
 <Grid.Column>
   <Image src='/assets/images/wireframe/image.png' />
 </Grid.Column>
 <Grid.Column>
   <Image src='/assets/images/wireframe/image.png' />
 </Grid.Column>
</Grid.Row>
<Grid.Row columns={3}>
<Grid.Column>
<Image src='/assets/images/wireframe/image.png' />
</Grid.Column>
<Grid.Column>
<Image src='/assets/images/wireframe/image.png' />
</Grid.Column>
<Grid.Column>
<Image src='/assets/images/wireframe/image.png' />
</Grid.Column>
</Grid.Row>
   </Grid>
</Container>
      </div>
    );
  }
}

export default ITServices;
