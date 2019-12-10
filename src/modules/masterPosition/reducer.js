import {
  ADMIN_CREATE_POSITION_LOADING,
  ADMIN_CREATE_POSITION_SUCCESS,
  ADMIN_CREATE_POSITION_ERROR,
  ADMIN_UPDATE_POSITION_LOADING,
  ADMIN_UPDATE_POSITION_SUCCESS,
  ADMIN_UPDATE_POSITION_ERROR,
  ADMIN_DELETE_POSITION_LOADING,
  ADMIN_DELETE_POSITION_SUCCESS,
  ADMIN_DELETE_POSITION_ERROR,
} from './types'

const positionReducer = (state = {}, action) => {
  switch (action.type) {
    // created
    case ADMIN_CREATE_POSITION_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      }
    case ADMIN_CREATE_POSITION_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
      }
    case ADMIN_CREATE_POSITION_ERROR:
      return {
        ...state,
        message: action.payload,
        isLoading: action.isLoading,
      }

    // updated
    case ADMIN_UPDATE_POSITION_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      }
    case ADMIN_UPDATE_POSITION_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
      }
    case ADMIN_UPDATE_POSITION_ERROR:
      return {
        ...state,
        message: action.payload,
        isLoading: action.isLoading,
      }

    // deleted
    case ADMIN_DELETE_POSITION_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      }
    case ADMIN_DELETE_POSITION_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
      }
    case ADMIN_DELETE_POSITION_ERROR:
      return {
        ...state,
        message: action.payload,
        isLoading: action.isLoading,
      }

    default:
      return state
  }
}

export default positionReducer
