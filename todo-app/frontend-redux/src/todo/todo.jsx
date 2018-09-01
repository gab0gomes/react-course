import React, { Component } from 'react';

import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

export default props => (
	<div>
		<PageHeader name='Tarefas' small='Cadastro'/>

		<TodoForm/>

		<TodoList/>
	</div>
);
