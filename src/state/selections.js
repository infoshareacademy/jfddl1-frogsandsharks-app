import * as firebase from 'firebase'
const ADD = 'selections/ADD'
const UPDATE = 'selections/UPDATE'
const REMOVE = 'selections/REMOVE'


export const add = (day, meal, productId) => ({
  type: ADD,
  day, meal, productId
});

export const update = (newSelectionsArray) => ({
  type: UPDATE,
  payload: newSelectionsArray
});

export const remove = (productId) => {
  console.log('REMOVE ACTION CREATOR', productId);
  return {
    type: REMOVE,
    productId
  }
};


const initialState = []

export default (state = initialState, action) => {
  console.log('REDUCER', action);
  switch (action.type) {
    case ADD : {
      var newState = [
        ...state,
        {
          day: action.day,
          meal: action.meal,
          productId: action.productId
        }
      ];
      var userId = firebase.auth().currentUser.uid
      firebase.database().ref('/usersData/').child(userId).child('selections').set(newState)
        .then(() => {
          console.log('ADDED TO FIREBASE');
        })
      return newState
    }
    case UPDATE : {
      return action.payload
    }
    case REMOVE: {
      console.log('REMOVE ACTION')

      const indexOfItemToRemove = state.findIndex( product => product.productId === action.productId)

      const removeState = state.filter( (item, index) => index !== indexOfItemToRemove)

      var userId = firebase.auth().currentUser.uid
      firebase.database().ref('/usersData/').child(userId).child('selections/').set(removeState)
      return  removeState;
    }
    default:
      return state
  }
}

