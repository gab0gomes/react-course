import React from 'react';

import IconButton from '../template/iconButton';

export default props => {
	const renderRows = () => {
		const list = props.list || [];

		return list.map(todo => (
			<tr key={ todo._id }>
				<td className={ todo.done ? 'markedAsDone' : '' }>
					{ todo.description }
				</td>
				<td className='btn-group table-cell'>
					<IconButton style='success' icon='check' hide={ todo.done }
						onClick={ () => props.handleMarkAsDone(todo._id) }>
					</IconButton>
					<IconButton style='warning' icon='undo' hide={ !todo.done }
						onClick={ () => props.handleMarkAsPending(todo._id) }>
					</IconButton>
					<IconButton style='danger' icon='trash-o' hide={ !todo.done }
						onClick={ () => props.handleRemove(todo._id) }>
					</IconButton>
				</td>
			</tr>
		));
	};

	return (
		<table className="table">
			<thead>
				<tr>
					<th>Descrição</th>
					<th className='w-105'>Ações</th>
				</tr>
			</thead>
			<tbody>
				{ renderRows() }
			</tbody>
		</table>
	);
};