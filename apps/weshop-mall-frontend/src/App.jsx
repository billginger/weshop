import React from 'react';
import { render } from 'react-dom';
import AppMain from './AppMain.jsx';
import './less/global.less';

const App = () => (
	<AppMain />
);

render(<App />, document.getElementById('root'));
