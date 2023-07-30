module.exports = app =>{

	const server = {};

	server.createUser = (req) => {
		const userRepository = app.repositories.usersRepository;
		let result = userRepository.createUser(req.body);
		return result;
	}


	server.deleteUser = (req) => {
		const userRepository = app.repositories.usersRepository;
		let result = userRepository.deleteUser(req.params.id);
		return result;
	}
	return server;
}