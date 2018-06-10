import React, { Component } from 'react';
import { Form, Input, Button, Grid, Container, Header, Card, Icon } from 'semantic-ui-react'

class AboutUs extends Component {
  render() {
    return (
      <div>
      <Container textAlign='justified'>

       <Header  textAlign='center'as='h1'>WHY GET SET TECH IT CONSULTING</Header>
       <Header  textAlign='center'as='h4'>GetSetTech is more than an IT consulting firm. With more than 2 months experience, a diverse team of specialists, and a commitment to integrity above all else, we are uniquely positioned to provide value and deliver results.</Header>
      <Grid columns={2} centered >

      <Grid.Column centered>
      <Card>
  <Card.Content header='Interim & Transitional Leadership' />
  <Card.Content description="With experience leading organizations through change, we excel in providing interim and transitional executive leadership. Onsite or remote-based, our seasoned executives manage morale and get the job done." />

</Card>
<Card>
<Card.Content header='Unparalleled Experience' />
<Card.Content description="Serving startups, the mid-sized, and the Fortune 1000 – we manage projects from single campaigns to datacenter builds. We focus on delivering value to our clients, regardless of project size." />

</Card>
      </Grid.Column>
      <Grid.Column>
      <Card>
  <Card.Content header='Results Driven' />
  <Card.Content description="Our work may begin with an evaluation and alignment around a “strategy” – but we don’t stop there. Across technology platforms, we deliver results and exceed expectations." />

</Card>
<Card>
<Card.Content header='People Focused' />
<Card.Content description="Digitization by itself is not transformative; it’s not just about the tools you use. We focus on the people, working in partnership to become aligned, efficient, productive, and fulfilled." />

</Card>
      </Grid.Column>

    </Grid>
</Container>
      </div>
    );
  }
}

export default AboutUs;
