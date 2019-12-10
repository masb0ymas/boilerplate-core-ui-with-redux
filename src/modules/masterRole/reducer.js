import {
  ADMIN_CREATE_ROLE_LOADING,
  ADMIN_CREATE_ROLE_SUCCESS,
  ADMIN_CREATE_ROLE_ERROR,
  ADMIN_UPDATE_ROLE_LOADING,
  ADMIN_UPDATE_ROLE_SUCCESS,
  ADMIN_UPDATE_ROLE_ERROR,
  ADMIN_DELETE_ROLE_LOADING,
  ADMIN_DELETE_ROLE_SUCCESS,
  ADMIN_DELETE_ROLE_ERROR,
} from './types'

const roleReducer = (state = {}, action) => {
  switch (action.type) {
    // created
    case ADMIN_CREATE_ROLE_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      }
    case ADMIN_CREATE_ROLE_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
      }
    case ADMIN_CREATE_ROLE_ERROR:
      return {
        ...state,
        message: action.payload,
        isLoading: action.isLoading,
      }

    // updated
    case ADMIN_UPDATE_ROLE_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      }
    case ADMIN_UPDATE_ROLE_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
      }
    case ADMIN_UPDATE_ROLE_ERROR:
      return {
        ...state,
        message: action.payload,
        isLoading: action.isLoading,
      }

    // deleted
    case ADMIN_DELETE_ROLE_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      }
    case ADMIN_DELETE_ROLE_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
      }
    case ADMIN_DELETE_ROLE_ERROR:
      return {
        ...state,
        message: action.payload,
        isLoading: action.isLoading,
      }

    default:
      return state
  }
}

export default roleReducer
