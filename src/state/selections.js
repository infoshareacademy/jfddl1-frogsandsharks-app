const ADD = 'selections/ADD'
const REMOVE = 'selections/REMOVE'

export const add = (day, meal, productId) => ({
  type: ADD,
  day, meal, productId
})

export const remove = (productId) => ({
  type: REMOVE,
  groupId: productId
})


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
      return state.filter(
        productId => productId !== action.groupId
      )
    default:
      return state
  }
}

