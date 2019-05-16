import { DUMMY_ACTION } from './actions'

// Shape
export interface AuthenticationState {
  value: string
}

const initialState: AuthenticationState = {
  value: 'Empty',
}

// Reducer
export default function reducer(
  state: AuthenticationState = initialState,
  action,
): AuthenticationState {
  switch (action.type) {
    case DUMMY_ACTION:
      return { ...state, value: action.value }
    default:
      return state
  }
}
