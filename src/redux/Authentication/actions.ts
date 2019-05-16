import { AppState } from '../store'

// Action Types
export const DUMMY_ACTION = 'dummyAction'

// Action Creaters
export const performDummyAction = () => ({
  type: DUMMY_ACTION,
  value: 'ABC',
})

// Selectors
export const getDummyValue = (state: AppState) => state.auth.value

// Thunks
