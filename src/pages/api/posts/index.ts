import dbConnect from "config/db";
import { NextApiRequest, NextApiResponse } from "next";
import Post from "../../../models/Post";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      dbConnect();
      const posts = await Post.find();
      res.status(200).json(posts);
    } catch (error) {
      console.log(error);
      res.status(500).json("Something went wrong");
    }
  }
};
