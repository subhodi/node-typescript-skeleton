import * as mongoose from 'mongoose';

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var userSchema = new Schema({
    id: ObjectId,
    name: String,
    email: String,
    date: Date
});

userSchema.pre("save", function save(next) {
    const user = this;
    console.log("Saved");
});

const User = mongoose.model("User", userSchema);
export default User;