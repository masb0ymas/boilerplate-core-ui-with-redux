import { combineReducers } from 'redux';
import authReducer from './auth/reducer';
import roleReducer from './masterRole/reducer';
import positionReducer from './masterPosition/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  role: roleReducer,
  position: positionReducer,
});

export default rootReducer;
