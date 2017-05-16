import React from 'react'


class ListOfFood extends React.Component {

    constructor (props){
        super(props)

        this.state = {
            foods: []
        }

      fetch(
        process.env.PUBLIC_URL + '/data/foods.json'
      ).then(
        response => response.json()
      ).then(
        foods => this.setState({
          foods: foods
        })
      )
    }

    render () {
        return (

    <div>
        <h1>Food</h1>
        <ul>
            {
                this.state.foods.filter(
                  foodItem => foodItem.category === "owoce"
                ).map(
                  foodItem => (
                    <li key={foodItem.uid}>{foodItem.name}</li>
                )
            )
            }
        </ul>

    </div>
        )
    }

}

export default ListOfFood