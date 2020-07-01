import axios from 'axios'
import { API_URL } from './apiConfig'

axios.defaults.baseURL = `${API_URL}`
axios.defaults.headers.common.Authorization = localStorage.getItem('token')

class Service {
  // Authentication
  static signIn(values) {
    return axios.post('/auth/signin', values)
  }

  static signUp(values) {
    return axios.post('/auth/signup', values)
  }

  static verifyToken() {
    return axios.get('/auth/verify')
  }

  static changePassword(values, id) {
    return axios.put(`/auth/change-password/${id}`, values)
  }

  static forgotPassword(values) {
    return axios.post('/auth/forgot-password', values)
  }

  static resetPassword(values, id) {
    return axios.put(`/auth/forgot-password/${id}`, values)
  }

  // Role
  static getRoles(params) {
    return axios.get(`role${params}`)
  }

  static getRoleById(id) {
    return axios.get(`role/${id}`)
  }

  static createRole(values) {
    return axios.post('role', values)
  }

  static updateRole(values, id) {
    return axios.put(`role/${id}`, values)
  }

  static deleteRole(id) {
    return axios.delete(`role/${id}`)
  }

  // Master Position
  static getMasterPositions(params) {
    return axios.get(`master-position${params}`)
  }

  static getMasterPositionById(id) {
    return axios.get(`master-position/${id}`)
  }

  static createMasterPosition(values) {
    return axios.post('master-position', values)
  }

  static updateMasterPosition(values, id) {
    return axios.put(`master-position/${id}`, values)
  }

  static deleteMasterPosition(id) {
    return axios.delete(`master-position/${id}`)
  }
}

export default Service
