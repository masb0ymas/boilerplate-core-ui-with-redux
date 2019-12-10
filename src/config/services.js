import axios from 'axios'
import { API_URL } from './apiConfig'

axios.defaults.baseURL = `${API_URL}`
axios.defaults.headers.common.Authorization = localStorage.getItem('token')

class Service {
  // Authentication
  static signIn(values) {
    return axios.post('/auth/signin', values).then(response => response)
  }

  static signUp(values) {
    return axios.post('/auth/signup', values).then(response => response)
  }

  static changePassword(values, _id) {
    return axios.put(`/auth/change-password/${_id}`, values).then(response => response)
  }

  static forgotPassword(values) {
    return axios.post('/auth/forgot-password', values).then(response => response)
  }

  static resetPassword(values, _id) {
    return axios.put(`/auth/forgot-password/${_id}`, values).then(response => response)
  }

  // Role
  static getRoles(params) {
    return axios.get(`role${params}`).then(response => response)
  }

  static getRoleById(_id) {
    return axios.get(`role/${_id}`).then(response => response)
  }

  static createRole(values) {
    return axios.post('role', values).then(response => response)
  }

  static updateRole(values, _id) {
    return axios.put(`role/${_id}`, values).then(response => response)
  }

  static deleteRole(_id) {
    return axios.delete(`role/${_id}`).then(response => response)
  }

  // Master Position
  static getMasterPositions(params) {
    return axios.get(`master-position${params}`).then(response => response)
  }

  static getMasterPositionById(_id) {
    return axios.get(`master-position/${_id}`).then(response => response)
  }

  static createMasterPosition(values) {
    return axios.post('master-position', values).then(response => response)
  }

  static updateMasterPosition(values, _id) {
    return axios.put(`master-position/${_id}`, values).then(response => response)
  }

  static deleteMasterPosition(_id) {
    return axios.delete(`master-position/${_id}`).then(response => response)
  }
}

export default Service
