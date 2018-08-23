import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family'
import Member from './member'

ReactDOM.render(
	<Family lastName='Gomes'>
		<Member name='Gabriel' />
		<Member name='Helena' />
		<Member name='Márcia' />
		<Member name='Victor' />
	</Family>
, document.getElementById('app'));