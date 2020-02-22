import React, { useState } from 'react'
import { Form, Button, Icon, Checkbox } from 'semantic-ui-react'

export default function BreastMilk(props) {
    const data = {}
    const error = {}

    function dataObject(e) {
        if (e.target) {
            let dataName = e.target.name
            data[dataName] = e.target.value
        } 
        data.breast = e
    }

    function handleErrors(e) {
        
    }

    const options = [
        { key: 'l', text: 'Left', value: 'left' },
        { key: 'r', text: 'Right', value: 'right' },
        { key: 'b', text: 'Both', value: 'both' },
      ]

    return(
        <div>
            <Form.Group widths='equal'>
                <Form.Input 
                    onChange={(e) => dataObject(e)} 
                    type='time' 
                    name='start'
                    label='Start Time' />
                <Form.Input 
                    onChange={(e) => dataObject(e)}
                    type='number' 
                    name='total'
                    label='Time Spent Feeding - Minutes' />
                <Form.Input 
                    onChange={(e) => dataObject(e)}
                    type='date'
                    name='date' 
                    label='Feeding Date' />
                <Form.Select
                    onChange={(e) => {
                        let selection = e.target.textContent
                        dataObject(selection)
                    }} 
                    fluid
                    name='breast'
                    label='Breast Used'
                    options={options}
                    placeholder='Please Select Below' />
            </Form.Group>
            <Form.Group widths='equal' >
                <Form.TextArea
                    name='notes'
                    label='Notes About This Feeding' 
                    onChange={(e) => dataObject(e)} />
            </Form.Group>
            <Button 
                onClick={async () => {
                    props.sendData(data)
                }} 
                floated='right' 
                color='teal' 
                animated >
                <Button.Content visible>Enter Feeding</Button.Content>
                <Button.Content hidden>
                    <Icon name='check' />
                </Button.Content>
            </Button>
        </div>
    )
}