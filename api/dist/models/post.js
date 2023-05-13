import mongoose from "mongoose";
const { Schema } = mongoose;
const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    media: {
        type: String
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {
    timestamps: true
});
const Post = mongoose.model("Post", PostSchema);
export default Post;
