import React from 'react'
import GenericTable from './GenericTable'

const FoodsTable = (props) => (
    <GenericTable
        data={props.foods}
        config={[
            {
                name: 'name',
                label: 'Name'
            },
            {
                name: 'category',
                label: 'Category'
            }
        ]}
       // linked
        linkPrefix="/foods"
    />
)

export default FoodsTable