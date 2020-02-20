import React, { useState } from 'react'
import { Form, Button } from 'semantic-ui-react'
import BreastMilk from '../forms/BreastMilk'

function sendData(data) {
    console.log(data)
}

function formRender(selection) {
    switch(selection) {
        case 'Breast Feeding':
            return <BreastMilk sendData={sendData} />
        case 'Pumped Breast Milk':
            return console.log('pumped')
        case 'Formula':
            return console.log('formula')
        case 'Donor Milk':
            return <Button>Hello</Button>
        default:
            return null
    }
}

const options = [
    { key: 'b', text: 'Breast Feeding', value: 'breast feeding' },
    { key: 'p', text: 'Pumped Breast Milk', value: 'pumped breast milk' },
    { key: 'f', text: 'Formula', value: 'formula' },
    { key: 'd', text: 'Donor Milk', value: 'donor milk' }
  ]

export default function NewFeeding() {
    const [feedingType, setFeedingType] = useState(null)
    
    return(
        <div className='page-content-container'>
            <h1 className='page-header-title'>New Feeding</h1>
            <Form>
                <Form.Select 
                    onChange={(e) => {
                        let selection = e.target.textContent
                        setFeedingType(selection)
                    }} 
                    fluid 
                    selection 
                    label='Feeding Type' 
                    options={options} 
                    placeholder='Feeding Type' 
                />
                {formRender(feedingType)}
            </Form>
        </div>
    )
}
