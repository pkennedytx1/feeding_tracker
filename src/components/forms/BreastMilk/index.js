import React, { useState } from 'react'
import { Form, Button, Icon } from 'semantic-ui-react'

export default function BreastMilk(props) {
    const [data, setData] = useState(null)
    let formData = {}
    
    function dataObject(e) {
        let dataName = e.target.name
        formData[dataName] = e.target.value
        setData(formData)
    }

    return(
        <div>
            <Form.Group widths='equal'>
                <Form.Input 
                    onChange={(e) => dataObject(e)} 
                    type='time' 
                    name='start'
                    label='Start Time' />
                <Form.Input type='time' label='End Time' />
                <Form.Input type='date' label='Feeding Date' />
            </Form.Group>
            <Form.Group widths='equal' >
                <Form.TextArea label='Notes About This Feeding' />
            </Form.Group>
            <Button 
                onClick={async () => {
                    props.sendData(data)
                }} 
                floated='right' 
                color='teal' 
                animated
            >
                <Button.Content visible>Enter Feeding</Button.Content>
                <Button.Content hidden>
                    <Icon name='check' />
                </Button.Content>
            </Button>
        </div>
    )
}