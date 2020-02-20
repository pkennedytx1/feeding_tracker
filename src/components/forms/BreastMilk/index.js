import React from 'react'
import { Form, Button, Icon } from 'semantic-ui-react'

export default function BreastMilk() {
    return(
        <div>
            <Form.Group widths='equal'>
                <Form.Input type='time' label='Start Time' />
                <Form.Input type='time' label='End Time' />
                <Form.Input type='date' label='Feeding Date' />
            </Form.Group>
            <Form.Group widths='equal' >
                <Form.TextArea label='Notes About This Feeding' />
            </Form.Group>
            <Button floated='right' color='teal' animated>
                <Button.Content visible>Enter Feeding</Button.Content>
                <Button.Content hidden>
                    <Icon name='check' />
                </Button.Content>
            </Button>
        </div>
    )
}