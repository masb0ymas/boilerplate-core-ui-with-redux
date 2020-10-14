import Service from '../../../config/services'
import { AlertMessage } from '../../../helpers'
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

export const createRole = (formData, refresh) => async (dispatch) => {
  let ObjError = ''
  const paramsResponse = {}

  try {
    dispatch({ type: ADMIN_CREATE_ROLE_LOADING, isLoading: true })
    // Call API
    const res = await Service.createRole(formData)
    dispatch({ type: ADMIN_CREATE_ROLE_SUCCESS, isLoading: false })

    paramsResponse.title = 'Created'
    paramsResponse.text = res.data.message
    AlertMessage.success(paramsResponse).then(() => {
      if (refresh) {
        refresh()
      } else {
        window.location.reload()
      }
    })
  } catch (err) {
    ObjError = err.response && err.response.data.message

    dispatch({
      type: ADMIN_CREATE_ROLE_ERROR,
      payload: ObjError,
      isLoading: false,
    })
    AlertMessage.error(err)
  }
}

export const updateRole = (formData, id, refresh) => async (dispatch) => {
  let ObjError = ''
  const paramsResponse = {}

  try {
    dispatch({ type: ADMIN_UPDATE_ROLE_LOADING, isLoading: true })
    // Call API
    const res = await Service.updateRole(formData, id)
    dispatch({ type: ADMIN_UPDATE_ROLE_SUCCESS, isLoading: false })

    paramsResponse.title = 'Success'
    paramsResponse.text = res.data.message
    AlertMessage.success(paramsResponse).then(() => {
      if (refresh) {
        refresh()
      } else {
        window.location.reload()
      }
    })
  } catch (err) {
    ObjError = err.response && err.response.data.message

    dispatch({
      type: ADMIN_UPDATE_ROLE_ERROR,
      payload: ObjError,
      isLoading: false,
    })
    AlertMessage.error(err)
  }
}

export const deleteRole = (id, refresh) => async (dispatch) => {
  let ObjError = ''
  const paramsResponse = {}

  try {
    dispatch({ type: ADMIN_DELETE_ROLE_LOADING, isLoading: true })
    // Call API
    const res = await Service.deleteRole(id)
    dispatch({ type: ADMIN_DELETE_ROLE_SUCCESS, isLoading: false })

    paramsResponse.title = 'Success'
    paramsResponse.text = res.data.message
    AlertMessage.success(paramsResponse).then(() => {
      if (refresh) {
        refresh()
      } else {
        window.location.reload()
      }
    })
  } catch (err) {
    ObjError = err.response && err.response.data.message

    dispatch({
      type: ADMIN_DELETE_ROLE_ERROR,
      payload: ObjError,
      isLoading: false,
    })
    AlertMessage.error(err)
  }
}
