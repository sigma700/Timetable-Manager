import mongoose, { Schema } from 'mongoose';

//function for creating a new model
const userSchema = new Schema(
	{
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		isVerified: { type: Boolean, default: false },
		accountType: {
			type: String,
			enum: ['teacher', 'admin', 'school_admin'],
			default: 'teacher',
		},
		school: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'school' },
		contacts: { type: String, required: true },
		resetPasscodeToken: String,
		verToken: String,
	},
	{
		timestamps: true,
	}
);

export const User = mongoose.model('Teacher', userSchema);
