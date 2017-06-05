import React from 'react'

class Food extends React.Component {

    constructor(props) {
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

    render() {
        const foodId = parseInt(this.props.match.params.foodId, 10)
        return (
            <div>
                food: {foodId}
                {
                    this.state.foods.filter(
                        food => food.id === foodId
                    ).map(
                        food => (
                            <ul key={food.uid}>
                                <li>{food.name}</li>
                            </ul>
                        )
                    )
                }
            </div>
        )
    }
}

export default Food