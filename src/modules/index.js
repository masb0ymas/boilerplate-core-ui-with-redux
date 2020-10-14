import { combineReducers } from 'redux'
import authReducer from './auth/reducer'
import roleReducer from './master/role/reducer'
import profesiReducer from './master/profesi/reducer'

const rootReducer = combineReducers({
  auth: authReducer,
  role: roleReducer,
  profesi: profesiReducer,
})

export default rootReducer
