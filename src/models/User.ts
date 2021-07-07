import mongoose, { Document } from "mongoose";

interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: number;
    lng: number;
  };
}

interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}
export interface IUserSchema extends Document {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}

const userSchema = new mongoose.Schema<IUserSchema>({
  id: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  address: {
    street: { type: String },
    suite: { type: String },
    city: { type: String },
    zipcode: { type: String },
    geo: {
      lat: { type: Number },
      lng: { type: Number },
    },
  },
  phone: {
    type: String,
    min: 8,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  company: {
    name: { type: String },
    catchPhrase: { type: String },
    bs: { type: String },
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
