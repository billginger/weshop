import React from 'react';
import { render } from 'react-dom';
import AppMain from './AppMain.jsx';

const App = () => (
	<div>
		<AppMain />
	</div>
);

render(<App />, document.getElementById('root'));
