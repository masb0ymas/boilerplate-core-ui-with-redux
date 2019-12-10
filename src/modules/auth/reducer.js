import {
  AUTHENTICATED,
  UNAUTHENTICATED,
  AUTHENTICATION_ERROR,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_ERROR,
  SIGNUP_LOADING,
  CHANGE_PASSWORD_LOADING,
  FORGOT_PASSWORD_LOADING,
  RESET_PASSWORD_LOADING,
  SIGNIN_LOADING,
} from './types'

const authReducer = (state = {}, action) => {
  switch (action.type) {
    // signup
    case SIGNUP_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
      }
    case SIGNUP_ERROR:
      return {
        ...state,
        message: action.payload,
        isLoading: action.isLoading,
      }

    // change password
    case CHANGE_PASSWORD_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      }
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
      }
    case CHANGE_PASSWORD_ERROR:
      return {
        ...state,
        message: action.payload,
        isLoading: action.isLoading,
      }

    // forgot password
    case FORGOT_PASSWORD_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      }
    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
      }
    case FORGOT_PASSWORD_ERROR:
      return {
        ...state,
        message: action.payload,
        isLoading: action.isLoading,
      }

    // reset password
    case RESET_PASSWORD_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      }
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
      }
    case RESET_PASSWORD_ERROR:
      return {
        ...state,
        message: action.payload,
        isLoading: action.isLoading,
      }

    // authentication
    case SIGNIN_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      }
    case AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
        isLoading: action.isLoading,
      }
    case UNAUTHENTICATED:
      return {
        ...state,
        authenticated: false,
      }
    case AUTHENTICATION_ERROR:
      return {
        ...state,
        message: action.payload,
        isLoading: action.isLoading,
      }

    default:
      return state
  }
}

export default authReducer
