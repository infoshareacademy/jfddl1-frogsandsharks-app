import React from 'react'
import GenericTable from './GenericTable'

const FoodsTable = (props) => (
    <GenericTable
        data={props.foods}
        config={[
            {
                name: 'name',
                label: 'Wyniki wyszukiwania'
            }

        ]}
        linked
        linkPrefix="/foods"
        day={props.day}
        meal={props.meal}
    />
)

export default FoodsTable