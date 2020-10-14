import Service from '../../../config/services'
import { AlertMessage } from '../../../helpers'
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

export const createProfesi = (formData, refresh) => async (dispatch) => {
  let ObjError = ''
  const paramsResponse = {}

  try {
    dispatch({ type: ADMIN_CREATE_PROFESI_LOADING, isLoading: true })
    // Call API
    const res = await Service.createMasterProfesi(formData)
    dispatch({ type: ADMIN_CREATE_PROFESI_SUCCESS, isLoading: false })

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
      type: ADMIN_CREATE_PROFESI_ERROR,
      payload: ObjError,
      isLoading: false,
    })
    AlertMessage.error(err)
  }
}

export const updateProfesi = (formData, id, refresh) => async (dispatch) => {
  let ObjError = ''
  const paramsResponse = {}

  try {
    dispatch({ type: ADMIN_UPDATE_PROFESI_LOADING, isLoading: true })
    // Call API
    const res = await Service.updateMasterProfesi(formData, id)
    dispatch({ type: ADMIN_UPDATE_PROFESI_SUCCESS, isLoading: false })

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
      type: ADMIN_UPDATE_PROFESI_ERROR,
      payload: ObjError,
      isLoading: false,
    })
    AlertMessage.error(err)
  }
}

export const deleteProfesi = (id, refresh) => async (dispatch) => {
  let ObjError = ''
  const paramsResponse = {}

  try {
    dispatch({ type: ADMIN_DELETE_PROFESI_LOADING, isLoading: true })
    // Call API
    const res = await Service.deleteMasterProfesi(id)
    dispatch({ type: ADMIN_DELETE_PROFESI_SUCCESS, isLoading: false })

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
      type: ADMIN_DELETE_PROFESI_ERROR,
      payload: ObjError,
      isLoading: false,
    })
    AlertMessage.error(err)
  }
}
