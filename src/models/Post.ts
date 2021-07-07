import mongoose, { Document, SchemaTypes } from "mongoose";

export interface IPost extends Document {
  id: number;
  title: string;
  userId: string;
  body: string;
}

const postSchema = new mongoose.Schema<IPost>({
  id: {
    type: Number,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  userId: {
    type: Number,
    ref: "User",
  },
});

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
export default Post;
