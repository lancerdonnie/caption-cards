import { combineReducers } from 'redux';
import capCardReducer from './capCardReducer';

const rootReducer = combineReducers({
  capCard: capCardReducer
});

export default rootReducer;
