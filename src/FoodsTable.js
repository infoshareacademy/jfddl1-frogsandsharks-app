import React from 'react'
import GenericTable from './GenericTable'

const FoodsTable = (props) => (
    <GenericTable
        data={props.foods}
        config={[
            {
                name: 'name',
                label: 'Name'
            }

        ]}
        linked
        linkPrefix="/foods"
    />
)

export default FoodsTable