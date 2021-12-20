import mongoose, { Schema, Document } from "mongoose";

export interface IComment extends Document {
  comment: string;
  author: string;
  post: string;
  commentId: string | undefined;
}

const CommentSchema = new Schema(
  {
    comment: { type: String, required: true },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
    commentId: {
      type: Schema.Types.ObjectId,
      ref: "Comment",
      default: null,
    },
  },
  {
    versionKey: false,
    timestamps: true,
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  }
);

export default mongoose.model<IComment>("Comment", CommentSchema);
