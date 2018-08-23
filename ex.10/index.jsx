import React from 'react';
import ReactDOM from 'react-dom';
import ClassComponent from './classComponent'

ReactDOM.render(
	<ClassComponent label='contador' initialValue={ 10 }/>
, document.getElementById('app'));