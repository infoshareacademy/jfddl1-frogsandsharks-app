import React from 'react'
import Meal from './FoodPlan/Meal'

const divstyle = {
  display: 'flex',
  justifyContent: 'space-between'

};

const dayNames = ['pn', 'wt', 'śr', 'cz', 'pt', 'so', 'nd']
const mealNames = [
  'Śniadanie',
  'Drugie śniadanie',
  'Obiad',
  'Podwieczorek',
  'Kolacja'
]

const productsData = [
  {uid: '1', name: 'Zupa'},
  {uid: '2', name: 'Ogór'},
  {uid: '3', name: 'Ziemnior'},
]

const selections = [
  { productUid: '1', dayName: 'śr', mealName: 'Obiad'}
]
const FoodPlan = () => (
  <div style={divstyle}>
    {
      dayNames.map(
        (dayName, index) => (
          <div key={index}>
            <div><h4>{dayName}</h4></div>
            {
              mealNames.map(
                (mealName, index) => {
                  const products = selections.filter(
                    selection => selection.dayName === dayName && selection.mealName === mealName
                  ).map(
                    selection => productsData.find(product => product.uid === selection.productUid)
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

export default FoodPlan