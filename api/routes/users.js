module.exports = app => {
	const usersController = app.controllers.usersController;

	app.route('/api/users').get(usersController.getUsers);

	app.route('/api/user/create').post(usersController.createUser);

	app.route('/api/user/delete/:id').delete(usersController.deleteUser);
}