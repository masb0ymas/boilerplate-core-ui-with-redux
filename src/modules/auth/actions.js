import Service from '../../config/services'
import { AlertMessage } from '../../helpers'

import {
  SIGNIN_LOADING,
  AUTHENTICATED,
  AUTHENTICATION_ERROR,
  UNAUTHENTICATED,
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  CHANGE_PASSWORD_LOADING,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_ERROR,
  FORGOT_PASSWORD_LOADING,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_ERROR,
  RESET_PASSWORD_LOADING,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
} from './types'

export const signIn = (credentials) => async (dispatch) => {
  try {
    dispatch({ type: SIGNIN_LOADING, isLoading: true })
    // Call API
    const res = await Service.signIn(credentials)
    localStorage.setItem('token', res.data.token)
    dispatch({ type: AUTHENTICATED, isLoading: false })
  } catch (err) {
    const errMsg = err.response ? err.response.data.message : 'Internal Server Error'

    dispatch({
      type: AUTHENTICATION_ERROR,
      payload: errMsg,
      isLoading: false,
    })
  }
}

export const signUp = (rowData) => async (dispatch) => {
  let ObjError = ''
  const paramsResponse = {}

  try {
    dispatch({ type: SIGNUP_LOADING, isLoading: true })
    // Call API
    const res = await Service.signUp(rowData)
    dispatch({ type: SIGNUP_SUCCESS, isLoading: false })

    paramsResponse.title = 'Success'
    paramsResponse.text = res.data.message
    AlertMessage.success(paramsResponse).then(() => window.location.reload())
  } catch (err) {
    ObjError = err.response.data

    dispatch({ type: SIGNUP_ERROR, payload: ObjError, isLoading: false })
    AlertMessage.error(err)
  }
}

export const changePass = (rowData, id) => async (dispatch) => {
  let ObjError = ''
  const paramsResponse = {}

  try {
    dispatch({ type: CHANGE_PASSWORD_LOADING, isLoading: true })
    // Call API
    const resChangePass = await Service.changePassword(rowData, id)
    dispatch({ type: CHANGE_PASSWORD_SUCCESS, isLoading: false })

    paramsResponse.title = 'Success'
    paramsResponse.text = resChangePass.data.message
    AlertMessage.success(paramsResponse).then(() => window.location.reload())
  } catch (err) {
    ObjError = err.response && err.response.data.message

    dispatch({ type: CHANGE_PASSWORD_ERROR, payload: ObjError, isLoading: false })
    AlertMessage.error(err)
  }
}

export const forgotPass = (rowData) => async (dispatch) => {
  let ObjError = ''
  const paramsResponse = {}

  try {
    dispatch({ type: FORGOT_PASSWORD_LOADING, isLoading: true })
    // Call API
    const res = await Service.forgotPassword(rowData)
    dispatch({ type: FORGOT_PASSWORD_SUCCESS, isLoading: false })

    paramsResponse.title = 'Success'
    paramsResponse.text = res.data.message
    AlertMessage.success(paramsResponse).then(() => window.location.reload())
  } catch (err) {
    ObjError = err.response && err.response.data.message

    dispatch({
      type: FORGOT_PASSWORD_ERROR,
      payload: ObjError,
      isLoading: false,
    })
    AlertMessage.error(err)
  }
}

export const resetPass = (rowData, id) => async (dispatch) => {
  let ObjError = ''
  const paramsResponse = {}

  try {
    dispatch({ type: RESET_PASSWORD_LOADING, isLoading: true })
    // Call API
    const resResetPass = await Service.resetPassword(rowData, id)
    dispatch({ type: RESET_PASSWORD_SUCCESS, isLoading: false })

    paramsResponse.title = 'Success'
    paramsResponse.text = resResetPass.data.message
    AlertMessage.success(paramsResponse).then(() => window.location.reload())
  } catch (err) {
    ObjError = err.response && err.response.data.message

    dispatch({ type: RESET_PASSWORD_ERROR, payload: ObjError, isLoading: false })
    AlertMessage.error(err)
  }
}

export const signOut = () => (dispatch) => {
  localStorage.removeItem('token')
  localStorage.removeItem('uid')
  localStorage.removeItem('rid')
  dispatch({ type: UNAUTHENTICATED })
  window.location.href = '/login'
}
