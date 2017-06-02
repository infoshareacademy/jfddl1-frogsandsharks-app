import * as firebase from 'firebase'

const ADD = 'selections/ADD'
const UPDATE = 'selections/UPDATE'


export const add = (day, meal, productId) => ({
  type: ADD,
  day, meal, productId
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
    default:
      return state
  }


}

