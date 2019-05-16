import { createStore, combineReducers, Store, applyMiddleware } from '../../node_modules/redux'
import thunk from '../../node_modules/redux-thunk'
import Authentication, { AuthenticationState } from '././Authentication/reducer'

// Shape
export interface AppState {
  auth: AuthenticationState
}

const rootReducer = combineReducers({
  auth: Authentication,
})

export const store: Store = createStore(rootReducer, applyMiddleware(thunk))
