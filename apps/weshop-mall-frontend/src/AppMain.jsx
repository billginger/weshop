import React from 'react';
import { connect } from 'react-redux';
import { TabBar } from 'antd-mobile';
import Home from './pages/Home.jsx';

const AppMain = ({ keyboardVisible }) => (
	<TabBar prerenderingSiblingsNumber={0} hidden={keyboardVisible}>
		<TabBar.Item>
			<Home />
		</TabBar.Item>
		<TabBar.Item>
			B
		</TabBar.Item>
		<TabBar.Item>
			C
		</TabBar.Item>
		<TabBar.Item>
			D
		</TabBar.Item>
	</TabBar>
);

const mapStateToProps = state => ({
	keyboardVisible: state.keyboardVisible
});

export default connect(mapStateToProps)(AppMain);
