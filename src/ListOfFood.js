import React from 'react'

import foods from './data/Foods'




class ListOfFood extends React.Component {

    constructor (props){
        super(props)

        this.state = {
            foods: foods
        }
    }

    render () {
        return (

    <div>
        <h1>Food</h1>
        <ul>
            {
                this.state.foods.filter(
                    food => food.kategoria === "vegetable"
                ).map(
                food => (
                    <li key={food.id}>{food.nazwa}</li>
                )
            )
            }
        </ul>

    </div>
        )
    }

}

export default ListOfFood