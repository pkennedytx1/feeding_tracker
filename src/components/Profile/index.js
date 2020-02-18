import React from 'react'
import { Grid, Image, Card, Icon } from 'semantic-ui-react'

export default function Profile(props) {
    console.log(props.user.displayName)
    return(
        <div className='page-content-container'>
            <h1 className='page-header-title'>Profile</h1>
            <Grid>
                <Grid.Row>
                    <Grid.Column className='center-items' width={16}>
                        <Image className='user-avatar-image' src={props.user.photoURL}/>
                        <h2>{props.user.displayName}</h2>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column className='center-items' width={8}>
                        <h2>Children</h2>
                        <Card fluid>
                            <Card.Content header='Isla Renee Kennedy' />
                            <Card.Content description='Hello I am the information about the child' />
                            <Card.Content extra>
                                <Icon name='venus' />Girl
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column className='center-items' width={8}>
                        <h2>Doctor Info</h2>
                        <Card fluid>
                            <Card.Content header='Primary Care Physician' />
                            <Card.Content description='Hello I am the information about the doctor' />
                            <Card.Content extra>
                                <Icon name='doctor' />Healthcare Provider
                            </Card.Content>
                        </Card>
                        <Card fluid>
                            <Card.Content header='Lactation Consultant' />
                            <Card.Content description='Hello I am the information about the doctor' />
                            <Card.Content extra>
                                <Icon name='doctor' />Healthcare Provider
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
