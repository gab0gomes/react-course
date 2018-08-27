import React, { Component } from 'react';
import axios from 'axios';

import PageHeader from '../template/pageHeader';
import TodoForm from './todoForm';
import TodoList from './todoList';

const URL = 'http://localhost:3003/api/todos';

export default class Todo extends Component {
	constructor (props) {
		super(props);

		this.state = { description: '', list: []};

		this.handleChange = this.handleChange.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
		this.handleRemove = this.handleRemove.bind(this);
		this.handleMarkAsDone = this.handleMarkAsDone.bind(this);
		this.handleMarkAsPending = this.handleMarkAsPending.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.handleClear = this.handleClear.bind(this);

		this.refresh();
	}

	refresh (description = '') {
		const search = description ? `&description__regex=/${description}/` : '';

		axios.get(`${URL}?sort=-createdAt${search}`)
			.then(resp => this.setState({
				...this.state,
				description,
				list: resp.data
			})
		);
	}

	handleSearch () {
		this.refresh(this.state.description);
	}

	handleChange (e) {
		this.setState({ ...this.state, description: e.target.value });
	}

	handleAdd () {
		const description = this.state.description;

		axios.post(URL, { description })
			.then(resp => this.refresh());
	};

	handleRemove (id) {
		axios.delete(`${URL}/${id}`)
			.then(resp => this.refresh(this.state.description));
	}

	handleMarkAsDone (id) {
		axios.put(`${URL}/${id}`, { done: true })
		.then(resp => this.refresh(this.state.description));
	}

	handleMarkAsPending (id) {
		axios.put(`${URL}/${id}`, { done: false })
		.then(resp => this.refresh(this.state.description));
	}

	handleClear () {
		this.refresh();
	}

	render () {
		return (
			<div>
				<PageHeader name='Tarefas' small='Cadastro'/>

				<TodoForm
					description={ this.state.description }
					handleChange={ this.handleChange }
					handleAdd={ this.handleAdd }
					handleSearch={ this.handleSearch }
					handleClear={ this.handleClear }/>

				<TodoList
					list={ this.state.list }
					handleMarkAsDone={ this.handleMarkAsDone }
					handleMarkAsPending={ this.handleMarkAsPending }
					handleRemove={ this.handleRemove }/>
			</div>
		);
	};
};