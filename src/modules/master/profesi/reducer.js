import {
  ADMIN_CREATE_PROFESI_LOADING,
  ADMIN_CREATE_PROFESI_SUCCESS,
  ADMIN_CREATE_PROFESI_ERROR,
  ADMIN_UPDATE_PROFESI_LOADING,
  ADMIN_UPDATE_PROFESI_SUCCESS,
  ADMIN_UPDATE_PROFESI_ERROR,
  ADMIN_DELETE_PROFESI_LOADING,
  ADMIN_DELETE_PROFESI_SUCCESS,
  ADMIN_DELETE_PROFESI_ERROR,
} from './types'

const profesiReducer = (state = {}, action) => {
  switch (action.type) {
    // created
    case ADMIN_CREATE_PROFESI_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      }
    case ADMIN_CREATE_PROFESI_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
      }
    case ADMIN_CREATE_PROFESI_ERROR:
      return {
        ...state,
        message: action.payload,
        isLoading: action.isLoading,
      }

    // updated
    case ADMIN_UPDATE_PROFESI_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      }
    case ADMIN_UPDATE_PROFESI_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
      }
    case ADMIN_UPDATE_PROFESI_ERROR:
      return {
        ...state,
        message: action.payload,
        isLoading: action.isLoading,
      }

    // deleted
    case ADMIN_DELETE_PROFESI_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      }
    case ADMIN_DELETE_PROFESI_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
      }
    case ADMIN_DELETE_PROFESI_ERROR:
      return {
        ...state,
        message: action.payload,
        isLoading: action.isLoading,
      }

    default:
      return state
  }
}

export default profesiReducer
