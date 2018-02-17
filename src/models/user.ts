import * as mongoose from 'mongoose';

const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    id: ObjectId,
    name: String,
    email: String,
    date: String
});

const User = mongoose.model("User", userSchema);
export default User;