import axios from 'axios';

const URL = 'http://localhost:3003/api/todos';

export const changeDescription = event => ({
	type: 'DESCRIPTION_CHANGED',
	payload: event.target.value,
});

export const search = () => {
	return (dispatch, getState) => {
		const description = getState().todo.description;
		const search = description ? `&description__regex=/${description}/` : '';

		axios.get(`${ URL }?sort=-createdAt${search}`)
			.then(res => dispatch({
				type: 'TODO_SEARCHED',
				payload: res.data,
			}));
	};
};

export const add = (description) => {
	return dispatch => {
		axios.post(URL, { description })
			.then(res => dispatch(clear()))
			.then(() => dispatch(search()));
	};
};

export const markAsDone = (id) => {
	return dispatch => {
		axios.put(`${URL}/${id}`, { done: true })
			.then(() => dispatch(search()));
	};
};

export const markAsPending = (id) => {
	return dispatch => {
		axios.put(`${URL}/${id}`, { done: false })
			.then(() => dispatch(search()));
	};
};

export const remove = (id) => {
	return dispatch => {
		axios.delete(`${URL}/${id}`)
			.then(() => dispatch(search()));
	};
};

export const clear = () => {
	return [
		{
			type: 'TODO_CLEAR'
		},
		search()
	];
};