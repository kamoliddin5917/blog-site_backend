import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  image: string;
  password: string;
}

const UserSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
    },
    firstName: String,
    lastName: String,
    username: {
      type: String,
      unique: true,
    },
    image: { type: String, default: "https://via.placeholder.com/200x200" },
    password: String,
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

export default mongoose.model<IUser>("User", UserSchema);
