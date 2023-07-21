import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from '../src/reducer/cryptoReducer';
import coinReducer from '../src/reducer/coinReducer';

const rootReducer = combineReducers({
  crypto: reducer,
  coin: coinReducer,
});

const composedEnhancer = composeWithDevTools(
  applyMiddleware(thunk)
);

const store = createStore(rootReducer, composedEnhancer);

export default store;
