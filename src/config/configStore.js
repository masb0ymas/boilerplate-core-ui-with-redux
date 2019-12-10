import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import jwt from 'jsonwebtoken'
import ROLE from './constans'
import rootReducer from '../modules'
import { AUTHENTICATED, UNAUTHENTICATED } from '../modules/auth/types'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const configStore = createStoreWithMiddleware(rootReducer)

const jwtPass = 'yoursecretjwtpass'
const token = localStorage.getItem('token')
const rid = localStorage.getItem('rid')

const invalidValues = [undefined, null, '']

let getToken = ''
if (!invalidValues.includes(token)) {
  const splitToken = token.split(' ')
  if (splitToken.length === 2) {
    ;[, getToken] = splitToken
  }
}

jwt.verify(getToken, jwtPass, (err, data) => {
  // console.log(err, data);
  if (!invalidValues.includes(data) && rid !== ROLE.UMUM) {
    configStore.dispatch({ type: AUTHENTICATED })
  } else {
    configStore.dispatch({ type: UNAUTHENTICATED })
  }
})

export default configStore
