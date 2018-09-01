import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Grid from '../template/grid';
import IconButton from '../template/iconButton';

import { add, changeDescription, search, clear } from './todoActions';

class TodoForm extends Component {
	constructor (props) {
		super(props);

		this.keyHandler = this.keyHandler.bind(this);
	};

	componentWillMount () {
		this.props.search();
	};

	keyHandler (e) {
		const { add, search, description, clear } = this.props;

		switch (e.key) {
			case 'Enter':
				e.shiftKey ? search() : add(description);
				break;
			case 'Escape':
				clear();
				break;
		};
	};

	render () {
		const { add, search, description, clear } = this.props;

		return (
			<div role='form' className='todoForm pb-60'>
				<Grid cols='12 9 10'>
					<input type='text' id='description' className='form-control'
						placeholder='Adicione uma tarefa'
						onChange={ this.props.changeDescription }
						onKeyUp={ this.keyHandler }
						value={ description } />
				</Grid>
				<Grid cols='12 3 2'>
					<div className="btn-group">
						<IconButton style='primary' icon='plus'
							onClick={ () => add(description) }/>
						<IconButton style='info' icon='search'
							onClick={ search }/>
						<IconButton style='default' icon='close'
							onClick={ clear }/>
					</div>
				</Grid>
			</div>
		);
	};
};


const mapStateToProps = state => ({ description: state.todo.description });
const mapDiscpachToProps = dispach =>
	bindActionCreators({ add, changeDescription, search, clear }, dispach);

export default connect(mapStateToProps, mapDiscpachToProps)(TodoForm);