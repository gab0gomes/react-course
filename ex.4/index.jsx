import React from 'react';
import ReactDOM from 'react-dom';
import First, { Second } from './component'

ReactDOM.render(
	<div>
		<First />
		<Second />
	</div>
, document.getElementById('app'));