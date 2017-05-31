const ADD = 'selections/ADD'
const UPDATE = 'selections/UPDATE'

export const add = (day, meal, productId) => ({
  type: ADD,
  day,
  meal,
  productId
})

export const update = (newSelectionsArray) => ({
  type: UPDATE,
  payload: newSelectionsArray
})

const initialState = []

export default (state = initialState, action) => {
  console.log('REDUCER', action);
  switch (action.type) {
    case ADD : {
       let newState = [
        ...state,
        {
          day: action.day,
          meal: action.meal,
          productId: action.productId
        }
      ];
      console.log('ADD', newState);

      return newState
    }
    case UPDATE : {
      return action.payload
    }
    default:
      return state
  }


}

