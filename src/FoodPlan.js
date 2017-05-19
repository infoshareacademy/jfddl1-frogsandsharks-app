import React from 'react'
import {connect} from 'react-redux'
import Meal from './FoodPlan/Meal'

const divstyle = {
  display: 'flex',
  justifyContent: 'space-between'

};

const dayNames = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela']
const mealNames = [
  'Śniadanie',
  'Drugie śniadanie',
  'Obiad',
  'Podwieczorek',
  'Kolacja'
]

export default connect (
  state => ({
    products: state.products,
    selections: state.selections
  })
) (class FoodPlan extends React.Component {
  render() {
    return  this.props.products === null ? <p>loading...</p> :(
      <div style={divstyle}>
        {
          dayNames.map(
            (dayName, index) => (
              <div key={index}>
                <div><h4>{dayName}</h4></div>
                {
                  mealNames.map(
                    (mealName, index) => {
                      const products = this.props.selections.filter(
                        selection => selection.day === dayName && selection.meal === mealName
                      ).map(
                        selection => this.props.products.find(product => product.uid === selection.productId)
                      )
                      return (
                        <Meal key={index} mealName={mealName} products={products}/>
                      )
                    }
                  )
                }
              </div>
            )
          )
        }
      </div>
    )
  }
}
)

