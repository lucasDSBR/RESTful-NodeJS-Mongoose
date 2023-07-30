module.exports = app => {
	const controller = {};

	controller.getUsers = (req, res) => res.status(200).json({});

	controller.createUser = (req, res) => {
		const usersServices = app.servers.usersServers;
		let reesult = usersServices.createUser(req);
		reesult == true ? res.status(201).json({'msg': 'Success !'}) : res.status(400).json({'msg': 'Error !'});
	};

	controller.deleteUser = (req, res) => {
		const usersServices = app.servers.usersServers;
		let reesult = usersServices.deleteUser(req);
		reesult == true ? res.status(200).json({'msg': 'Success !'}) : res.status(400).json({'msg': 'Error !'});
	};
	return controller;
}