import React from 'react'
import {List, Datagrid, TextField, DateField, EditButton, DeleteButton} from 'react-admin'

const SubscribersList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='id' />
                <TextField source='fullName' />
                <TextField source='email' />
                <DeleteButton />
            </Datagrid>
        </List>
    )
}

export default SubscribersList
