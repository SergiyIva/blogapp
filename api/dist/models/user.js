import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        index: { unique: true }
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ],
    password: {
        type: String,
        required: true
    }
});
const User = mongoose.model("User", UserSchema);
export default User;
