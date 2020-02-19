import React from 'react'
import { Form, Dropdown } from 'semantic-ui-react'

const options = [
    { key: 'b', text: 'Breast Feeding', value: 'breast feeding', name: 'breast feeding' },
    { key: 'p', text: 'Pumped Breast Milk', value: 'pumped breast milk', name: 'pumped' },
    { key: 'f', text: 'Formula', value: 'formula', name: 'formula' },
    { key: 'd', text: 'Doner Milk', value: 'doner milk', name: 'doner milk'}
  ]

export default function NewFeeding() {
    return(
        <div className='page-content-container'>
            <h1 className='page-header-title'>New Feeding</h1>
            <Form>
                <Form.Select onChange={(e) => console.log(e.target.getAttribute('name'))} label='Feeding Type' options={options} placeholder='Feeding Type' />
                <Form.Group>
                <Form.Input label='First name' placeholder='First Name' width={6} />
                <Form.Input label='Middle Name' placeholder='Middle Name' width={4} />
                <Form.Input label='Last Name' placeholder='Last Name' width={6} />
                </Form.Group>
                <Form.Group>
                <Form.Input placeholder='2 Wide' width={2} />
                <Form.Input placeholder='12 Wide' width={12} />
                <Form.Input placeholder='2 Wide' width={2} />
                </Form.Group>
                <Form.Group>
                <Form.Input placeholder='8 Wide' width={8} />
                <Form.Input placeholder='6 Wide' width={6} />
                <Form.Input placeholder='2 Wide' width={2} />
                </Form.Group>
            </Form>
        </div>
    )
}
