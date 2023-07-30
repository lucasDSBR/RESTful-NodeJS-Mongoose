const config = require('config');
const mongoose = require('mongoose');
const { Schema } = mongoose;
module.exports = app => {

	const repository = {};
	mongoose.connect(config.get('db.ConnectionString'))
	const userSchema = new Schema({
		_id: Number,
		name: String,
		password: String
	});
	repository.createUser = (data) => {
		try {
			let User = mongoose.model('User', userSchema);
			const newUser = new User(data);
			newUser.save();
			return true;
		} catch (error) {
			console.log(error)
			return false;
		}
	}

	repository.deleteUser = (id) => {
		try {
			let User = mongoose.model('User', userSchema);
			User.deleteOne({ _id: id }).exec();
			return true;
		} catch (error) {
			console.log(error)
			return false;
		}
	}
	return repository;
}