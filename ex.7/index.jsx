import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family'
import Member from './member'

ReactDOM.render(
	<Family lastName='Gomes'>
		<Member name='Gabriel' />
	</Family>
, document.getElementById('app'));