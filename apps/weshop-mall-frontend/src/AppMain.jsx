import React from 'react';
import { TabBar } from 'antd-mobile';
import Home from './pages/Home.jsx';

const AppMain = () => (
	<TabBar prerenderingSiblingsNumber={0}>
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

export default AppMain;
