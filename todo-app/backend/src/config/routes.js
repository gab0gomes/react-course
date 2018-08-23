const express = require('express');
const todoService = require('../api/todo/todoService');

module.exports = (server) => {
	// API Routes
	const router = express.Router();
	server.use('/api', router);

	// TODO Routes
	todoService.register(router, '/todos');
};
