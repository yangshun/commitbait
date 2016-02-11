import { combineReducers } from 'redux';
import { routeReducer as router } from 'react-router-redux';
import commitMessage from './modules/commitMessage';

export default combineReducers({
  commitMessage,
  router,
});
