import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux';
import AppMain from './AppMain.jsx';
import './less/global.less';
import './utils/bodyHeight.js';

const App = () => (
	<Provider store={store}>
		<AppMain />
	</Provider>
);

render(<App />, document.getElementById('root'));
