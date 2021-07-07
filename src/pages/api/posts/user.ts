import { NextApiRequest, NextApiResponse } from "next";
import User from "../../../models/User";
import Post from "../../../models/Post";
import dbConnect from "config/db";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      dbConnect();
      const user_id = req.query.user;

      const users = await Post.find({ userId: user_id });
      res.status(200).json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json("Something went wrong");
    }
  }
};
