const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
  users: [],
  pageSize: 5,
  usersTotalCount: 0,
  currentPage: 1,
  isFetching: false,
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map( user => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: true,
            }
          }
          return user
        }),
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map( user => {
          if (user.id === action.userId) {
            return {
              ...user,
              followed: false,
            }
          }
          return user
        }),
      }

    case SET_USERS: {
      return { ...state, users: [ ...action.users ] }
    }

    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.pageNumber }
    }

    case SET_USERS_TOTAL_COUNT: {
      return { ...state, usersTotalCount: action.usersTotalCount }
    }

    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching }
    }

    default:
      return state
  }

}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setCurrentPageAC = (pageNumber) => ({ type: SET_CURRENT_PAGE, pageNumber })
export const setUsersTotalCountAC = (usersTotalCount) => ({ type: SET_USERS_TOTAL_COUNT, usersTotalCount })
export const toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export default usersReducer
