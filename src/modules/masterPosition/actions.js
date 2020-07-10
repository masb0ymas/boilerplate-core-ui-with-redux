import Service from '../../config/services'
import { AlertMessage } from '../../helpers'
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

export const createPosition = (rowData) => async (dispatch) => {
  let ObjError = ''
  const paramsResponse = {}

  try {
    dispatch({ type: ADMIN_CREATE_POSITION_LOADING, isLoading: true })
    // Call API
    const res = await Service.createMasterPosition(rowData)
    dispatch({ type: ADMIN_CREATE_POSITION_SUCCESS, isLoading: false })

    paramsResponse.title = 'Created'
    paramsResponse.text = res.data.message
    AlertMessage.success(paramsResponse).then(() => window.location.reload())
  } catch (err) {
    ObjError = err.response && err.response.data.message

    dispatch({
      type: ADMIN_CREATE_POSITION_ERROR,
      payload: ObjError,
      isLoading: false,
    })
    AlertMessage.error(err)
  }
}

export const updatePosition = (rowData, id) => async (dispatch) => {
  let ObjError = ''
  const paramsResponse = {}

  try {
    dispatch({ type: ADMIN_UPDATE_POSITION_LOADING, isLoading: true })
    // Call API
    const res = await Service.updateMasterPosition(rowData, id)
    dispatch({ type: ADMIN_UPDATE_POSITION_SUCCESS, isLoading: false })

    paramsResponse.title = 'Success'
    paramsResponse.text = res.data.message
    AlertMessage.success(paramsResponse).then(() => window.location.reload())
  } catch (err) {
    ObjError = err.response && err.response.data.message

    dispatch({
      type: ADMIN_UPDATE_POSITION_ERROR,
      payload: ObjError,
      isLoading: false,
    })
    AlertMessage.error(err)
  }
}

export const deletePosition = (id) => async (dispatch) => {
  let ObjError = ''
  const paramsResponse = {}

  try {
    dispatch({ type: ADMIN_DELETE_POSITION_LOADING, isLoading: true })
    // Call API
    const res = await Service.deleteMasterPosition(id)
    dispatch({ type: ADMIN_DELETE_POSITION_SUCCESS, isLoading: false })

    paramsResponse.title = 'Success'
    paramsResponse.text = res.data.message
    AlertMessage.success(paramsResponse).then(() => window.location.reload())
  } catch (err) {
    ObjError = err.response && err.response.data.message

    dispatch({
      type: ADMIN_DELETE_POSITION_ERROR,
      payload: ObjError,
      isLoading: false,
    })
    AlertMessage.error(err)
  }
}
