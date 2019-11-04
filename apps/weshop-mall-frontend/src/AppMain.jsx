import React from 'react';
import { TabBar } from 'antd-mobile';

const AppMain = () => (
	<TabBar prerenderingSiblingsNumber={0}>
		<TabBar.Item>
			A
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
