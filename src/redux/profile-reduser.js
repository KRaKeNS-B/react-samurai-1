import { profileAPI } from '../api/api'
import { stopSubmit } from 'redux-form'

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

let initialState = {
  posts: [
    { id: 1, message: `Hi, how are you?`, likesCount: 11 },
    { id: 2, message: `It's my first post`, likesCount: 23 },
  ],
  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newPostBody,
        likesCount: 0
      }
      return {
        ...state,
        posts: [
          ...state.posts,
          newPost,
        ],
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      }
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      }
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.postId),
      }
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: {
          ...state.profile,
          photos: action.photos,
        },
      }
    }
    default:
      return state
  }
}


export const addPostActionCreator = (newPostBody) => ({
  type: ADD_POST,
  newPostBody,
})
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
})
export const setStatus = (status) => ({
  type: SET_STATUS,
  status,
})
export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId,
})
export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
})

export const getUserProfile = (userId) => async (dispatch) => {
  const response = await profileAPI.getUserProfile(userId)
  dispatch(setUserProfile(response.data))
}

export const getStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId)
  dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status)

  if (response.data.resultCode === 0) {
    dispatch(setStatus(status))
  }
}
export const savePhoto = (file) => async (dispatch) => {
  const response = await profileAPI.savePhoto(file)

  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos))
  }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
  const userId = getState().auth.userId
  const response = await profileAPI.saveProfile(profile)

  if (response.resultCode === 0) {
    dispatch(getUserProfile(userId))
  } else {
    const message = response.messages.length > 0 ? response.messages[0] : 'Some error'
    dispatch(stopSubmit('dialogProfileDataForm', {_error: message}))
    return Promise.reject(message)
  }
}

export default profileReducer
