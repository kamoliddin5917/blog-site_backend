import mongoose, { Schema, Document } from "mongoose";

export interface IPost extends Document {
  media: string;
  title: string;
  body: string;
  author: string;
}

const PostSchema = new Schema(
  {
    media: { type: String, required: true },
    title: { type: String, required: true },
    body: { type: String, required: true },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
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

export default mongoose.model<IPost>("Post", PostSchema);
