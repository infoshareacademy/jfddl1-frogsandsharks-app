const ADD = 'selections/ADD'

export const add = (day, meal, productId) => ({
  type: ADD,
  day, meal, productId
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
          productId: action.productId}
      ]
    default:
      return state
  }


}

