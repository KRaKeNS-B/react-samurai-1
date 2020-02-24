const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
  users: [
    // { id: 1, avatarUrl: 'https://pbs.twimg.com/profile_images/2881220369/2b27ac38b43b17a8c5eacfc443ce3384_400x400.jpeg', followed: false, fullName: 'Dimych', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
    // { id: 2, avatarUrl: 'https://pbs.twimg.com/profile_images/2881220369/2b27ac38b43b17a8c5eacfc443ce3384_400x400.jpeg', followed: true, fullName: 'Andrey', status: 'I am a boss 2', location: { city: 'Moscow', country: 'Russia' } },
    // { id: 3, avatarUrl: 'https://pbs.twimg.com/profile_images/2881220369/2b27ac38b43b17a8c5eacfc443ce3384_400x400.jpeg', followed: false, fullName: 'Mary', status: 'I am a boss too', location: { city: 'Kiev', country: 'Ukraine' } },
    // { id: 4, avatarUrl: 'https://pbs.twimg.com/profile_images/2881220369/2b27ac38b43b17a8c5eacfc443ce3384_400x400.jpeg', followed: true, fullName: 'Sveta', status: 'I am a boss 3', location: { city: 'Moscow', country: 'USA' } },
    // { id: 5, avatarUrl: 'https://pbs.twimg.com/profile_images/2881220369/2b27ac38b43b17a8c5eacfc443ce3384_400x400.jpeg', followed: false, fullName: 'Vova', status: 'I am a boss 5', location: { city: 'Kiev', country: 'Germany' } },
  ],
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
      return { ...state, users: [ ...state.users, ...action.users ] }
    }

    default:
      return state
  }

}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer
