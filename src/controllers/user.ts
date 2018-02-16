import User from "../models/User";

const user = new User({
    name: ' name',
    email: 'email',
    date: 'date',
});
user.save((err) => {
    if (err) {console.log(err); }
    else console.log("Insertion successfull");
});
