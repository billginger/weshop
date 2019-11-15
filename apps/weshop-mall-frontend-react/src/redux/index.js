import { combineReducers, createStore } from 'redux';

// Action
const setKeyboardVisible = payload => (
	{ type: 'SET_KEYBOARD_VISIBLE', payload }
);

// Reducer
const keyboardVisible = (state = false, action) => (
	action.type == 'SET_KEYBOARD_VISIBLE' ? action.payload : state
);
const reducer = combineReducers({
	keyboardVisible
});

// Store
const store = createStore(reducer);

export { setKeyboardVisible, store };
