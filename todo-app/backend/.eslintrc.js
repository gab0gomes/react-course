module.exports = {
	extends: 'airbnb-base',
	rules: {
		indent: [2, 'tab'],
		'no-tabs': 0,
		'linebreak-style': ['error', 'windows'],
		'import/no-extraneous-dependencies': ['error', { devDependencies: true, }],
		'prefer-destructuring': ['error', {
			object: false,
			array: false
		}],
	}
};
