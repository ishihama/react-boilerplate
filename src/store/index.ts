import { createStore, compose, combineReducers, Store } from 'redux';
import counter, { State as CounterState } from './modules/Counter';

declare global {
  interface Window {
    // eslint-disable-next-line no-undef
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export interface RootState {
  counter: CounterState;
}

const reducer = combineReducers({ counter });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers();

const store: Store<RootState> = createStore(reducer, enhancer);

/**
 * Selectors
 */
export function counterSelector(state: RootState): CounterState {
  return state.counter;
}

export default store;
