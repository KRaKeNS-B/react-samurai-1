import { getAuthUserData } from "./authReduser"

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

let initialState = {
  initialized: false,
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      }

    default:
      return state
  }

}

export const initializedSuccess = (userId, email, login, isAuth) => ({ type: INITIALIZED_SUCCESS})

export const initializeApp = () => {
  return (dispatch) => {
    dispatch(getAuthUserData())
      .then(() => {
        dispatch(initializedSuccess())
      })
  }
}

export default appReducer
