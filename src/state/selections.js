const ADD = 'selections/ADD'
const REMOVE = 'selections/REMOVE'

export const add = (day, meal, productId) => ({
  type: ADD,
  day, meal, productId
})

export const remove = (productId) => {
  console.log('REMOVE ACTION CREATOR', productId);
  return {
    type: REMOVE,
    productId
  }
}


const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD :
      return [
        ...state,
        {
          day: action.day,
          meal: action.meal,
          productId: action.productId
        }
      ]
    case REMOVE:
    console.log('REMOVE ACTION')
      return state.filter(
        product => product.productId !== action.productId
      )
    default:
      return state
  }
}

