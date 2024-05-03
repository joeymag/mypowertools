import {Schema, model, models} from "mongoose";

const UsersSchema = new Schema({
    FirstName: {
        type: String,
        required: true,
    },
    LastName: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
        unique: [true, 'Email already in database'],
    },
    Password: {
        type: String,
        required: true,
    },
    
    Image: {
        type: String,
    },
}, {timestamps: true});

const Users = models.Users || model('Users', UsersSchema);

export default Users;