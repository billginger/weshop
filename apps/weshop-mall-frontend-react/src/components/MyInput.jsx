import React from 'react';
import { connect } from 'react-redux';
import { InputItem } from 'antd-mobile';
import { setKeyboardVisible } from '../redux';

const MyInput = ({ label, placeholder, dispatch }) => {
	// Sort out parameters 
	if (!placeholder) {
		placeholder = label;
	}
	// Handle
	const handleFocus = () => {
		dispatch(setKeyboardVisible(true));
	};
	const handleBlur = () => {
		dispatch(setKeyboardVisible(false));
	};
	// Render
	return (
		<InputItem placeholder={placeholder} onFocus={handleFocus} onBlur={handleBlur}>{label}</InputItem>
	)
};

export default connect()(MyInput);
