var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema(
	{
		username: { type: String },
		name: { type: String },
		avatar: { type: String },
		created: { type: Date },
		is_admin: { type: Boolean },
		password: { type: String },
		unlock: { type: Date }
	},
	{ collection: 'Users' }
);

//Export model
module.exports = mongoose.model('User', UserSchema);
