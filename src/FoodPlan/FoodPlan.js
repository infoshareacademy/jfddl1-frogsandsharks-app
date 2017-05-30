import React from 'react'
import {connect} from 'react-redux'
import Meal from './Meal'
import "./style.css"

const divstyle = {
  display: 'flex',
  justifyContent: 'center'

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
    return  this.props.products.data === null ? <p>Pobieranie...</p> :(
      <div style={divstyle}>
        {
          dayNames.map(
            (dayName, index) => (
              <div key={index} className="dayStyle">
                <div className="dayNameStyle"><p>{dayName}</p></div>
                {

                  mealNames.map(
                    (mealName, index) => {
                      const products = this.props.selections.filter(
                        selection => selection.day === dayName && selection.meal === mealName
                      ).map(
                        selection => this.props.products.data.find(product => product.uid === selection.productId)
                      )
                      let link = '/foods/'+dayName+'/'+mealName;
                      return (
                        <Meal key={index} mealName={mealName} products={products} link={link}/>
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

