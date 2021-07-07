import dbConnect from "config/db";
import { NextApiRequest, NextApiResponse } from "next";
import User from "../../../models/User";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      dbConnect();
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json("Something went wrong");
    }
  }
};
