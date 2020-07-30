// import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
// other docs setting
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
// const initialState = {};

const middleware = [thunk];

// const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
// const store = createStore(
//   rootReducer,
//   /* preloadedState, */ composeEnhancers(applyMiddleware(...middleware))
// );

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});
const store = createStore(
  rootReducer,
  /* preloadedState, */ composeEnhancers(
    applyMiddleware(...middleware)
    // other store enhancers if any
  )
);

// const initialState = {};

// const middleware = [thunk];

// const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

// const enhancer = composeEnhancers(applyMiddleware(...middleware));

// const store = createStore(rootReducer, initialState, enhancer);

export default store;
